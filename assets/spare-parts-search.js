class SparePartsSearch {
  constructor() {
    this.container = document.querySelector('[data-spare-parts-search]');
    if (!this.container) return;
    
    this.brandSelect = this.container.querySelector('[data-parts-brand]');
    this.modelSelect = this.container.querySelector('[data-parts-model]');
    this.trimSelect = this.container.querySelector('[data-parts-trim]');
    this.yearSelect = this.container.querySelector('[data-parts-year]');
    this.searchForm = this.container.querySelector('[data-parts-search-form]');
    
    this.vehicleData = window.sparePartsData || [];
    
    this.init();
  }
  
  init() {
    if (!this.vehicleData.length) return;
    
    this.populateBrands();
    this.bindEvents();
  }
  
  populateBrands() {
    this.brandSelect.innerHTML = `<option value="">${this.getTranslation('select_brand')}</option>`;
    
    this.vehicleData.forEach(brand => {
      const option = document.createElement('option');
      option.value = brand.brand;
      option.textContent = brand.brand;
      this.brandSelect.appendChild(option);
    });
  }
  
  populateModels(brandName) {
    this.modelSelect.innerHTML = `<option value="">${this.getTranslation('select_model')}</option>`;
    this.modelSelect.disabled = true;
    
    const brand = this.vehicleData.find(b => b.brand === brandName);
    if (!brand) return;
    
    brand.models.forEach(model => {
      const option = document.createElement('option');
      option.value = model.name;
      option.textContent = model.name;
      this.modelSelect.appendChild(option);
    });
    
    this.modelSelect.disabled = false;
  }
  
  populateTrims(brandName, modelName) {
    this.trimSelect.innerHTML = `<option value="">${this.getTranslation('select_trim')}</option>`;
    this.trimSelect.disabled = true;
    
    const brand = this.vehicleData.find(b => b.brand === brandName);
    if (!brand) return;
    
    const model = brand.models.find(m => m.name === modelName);
    if (!model) return;
    
    model.trims.forEach(trim => {
      const option = document.createElement('option');
      option.value = trim.name;
      option.textContent = trim.name;
      this.trimSelect.appendChild(option);
    });
    
    this.trimSelect.disabled = false;
  }
  
  populateYears(brandName, modelName, trimName) {
    this.yearSelect.innerHTML = `<option value="">${this.getTranslation('select_year')}</option>`;
    this.yearSelect.disabled = true;
    
    const brand = this.vehicleData.find(b => b.brand === brandName);
    if (!brand) return;
    
    const model = brand.models.find(m => m.name === modelName);
    if (!model) return;
    
    const trim = model.trims.find(t => t.name === trimName);
    if (!trim) return;
    
    trim.years.forEach(year => {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      this.yearSelect.appendChild(option);
    });
    
    this.yearSelect.disabled = false;
  }
  
  bindEvents() {
    this.brandSelect.addEventListener('change', (e) => {
      const brandValue = e.target.value;
      
      // Reset dependent fields
      this.modelSelect.innerHTML = `<option value="">${this.getTranslation('select_model')}</option>`;
      this.modelSelect.disabled = true;
      this.trimSelect.innerHTML = `<option value="">${this.getTranslation('select_trim')}</option>`;
      this.trimSelect.disabled = true;
      this.yearSelect.innerHTML = `<option value="">${this.getTranslation('select_year')}</option>`;
      this.yearSelect.disabled = true;
      
      if (brandValue) {
        this.populateModels(brandValue);
      }
      
      this.updateHiddenFields();
    });
    
    this.modelSelect.addEventListener('change', (e) => {
      const modelValue = e.target.value;
      const brandValue = this.brandSelect.value;
      
      // Reset dependent fields
      this.trimSelect.innerHTML = `<option value="">${this.getTranslation('select_trim')}</option>`;
      this.trimSelect.disabled = true;
      this.yearSelect.innerHTML = `<option value="">${this.getTranslation('select_year')}</option>`;
      this.yearSelect.disabled = true;
      
      if (modelValue && brandValue) {
        this.populateTrims(brandValue, modelValue);
      }
      
      this.updateHiddenFields();
    });
    
    this.trimSelect.addEventListener('change', (e) => {
      const trimValue = e.target.value;
      const modelValue = this.modelSelect.value;
      const brandValue = this.brandSelect.value;
      
      // Reset dependent field
      this.yearSelect.innerHTML = `<option value="">${this.getTranslation('select_year')}</option>`;
      this.yearSelect.disabled = true;
      
      if (trimValue && modelValue && brandValue) {
        this.populateYears(brandValue, modelValue, trimValue);
      }
      
      this.updateHiddenFields();
    });
    
    this.yearSelect.addEventListener('change', () => {
      this.updateHiddenFields();
    });
    
    // Handle form submission
    this.searchForm.addEventListener('submit', (e) => {
      this.updateSearchQuery();
    });
  }
  
  updateHiddenFields() {
    const brandInput = this.searchForm.querySelector('[data-vehicle-brand]');
    const modelInput = this.searchForm.querySelector('[data-vehicle-model]');
    const trimInput = this.searchForm.querySelector('[data-vehicle-trim]');
    const yearInput = this.searchForm.querySelector('[data-vehicle-year]');
    
    if (brandInput) brandInput.value = this.brandSelect.value;
    if (modelInput) modelInput.value = this.modelSelect.value;
    if (trimInput) trimInput.value = this.trimSelect.value;
    if (yearInput) yearInput.value = this.yearSelect.value;
  }
  
  updateSearchQuery() {
    const searchInput = this.searchForm.querySelector('input[name="q"]');
    const vehicleInfo = [];
    
    if (this.brandSelect.value) vehicleInfo.push(this.brandSelect.value);
    if (this.modelSelect.value) vehicleInfo.push(this.modelSelect.value);
    if (this.trimSelect.value) vehicleInfo.push(this.trimSelect.value);
    if (this.yearSelect.value) vehicleInfo.push(this.yearSelect.value);
    
    if (vehicleInfo.length && !searchInput.value) {
      searchInput.value = vehicleInfo.join(' ');
    }
  }
  
  getTranslation(key) {
    // Get translations from the page or use defaults
    const translations = {
      'select_brand': document.documentElement.lang === 'ar' ? 'اختر الماركة' : 'Select Brand',
      'select_model': document.documentElement.lang === 'ar' ? 'اختر الموديل' : 'Select Model',
      'select_trim': document.documentElement.lang === 'ar' ? 'اختر الفئة' : 'Select Trim',
      'select_year': document.documentElement.lang === 'ar' ? 'اختر السنة' : 'Select Year'
    };
    
    return translations[key] || key;
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new SparePartsSearch();
  });
} else {
  new SparePartsSearch();
}