class CustomController {
  constructor() {
    this.text = '..and also a custom component.'
  }
}

CustomController.$inject = []

const customComponent = {
  controller: CustomController,
  controllerAs: 'custom',
  template: require('./custom.template.html')
}

export default customComponent
