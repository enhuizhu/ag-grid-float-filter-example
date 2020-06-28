export class FloatingFilterComponent {
  init(params) {
    console.log('float filter init:', params);
    this.params = params;
    this.genereateUi();
  }

  genereateUi() {
    this.ui = document.createElement('div');
    const textInput = document.createElement('input');
    textInput.setAttribute('type', 'text');
    textInput.setAttribute('style', 'width: calc(100% - 14px)');
    textInput.addEventListener('input', this.inputChange)
    this.ui.appendChild(textInput);
}

  inputChange = (e) => {
    console.log('inputChange', e.target.value);
    this.params.onChange && this.params.onChange(e.target.value);
  }

  getGui() {
    return this.ui;
  }
};