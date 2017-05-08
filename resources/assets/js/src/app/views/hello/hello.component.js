class HelloController {
  constructor() {
    this.greeting = 'Hello webpack!';
  }
}

HelloController.$inject = [];

const helloComponent = {
  controller: HelloController,
  controllerAs: 'vm',
  template: require('./hello.template.html')
};

export default helloComponent;
