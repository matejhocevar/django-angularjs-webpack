require('./hello.style.scss')

class HelloController {
  constructor() {
    this.greeting = 'Hello! It works.'
  }
}

HelloController.$inject = []

const helloComponent = {
  controller: HelloController,
  controllerAs: 'ctrl',
  template: require('./hello.template.html')
}

export default helloComponent
