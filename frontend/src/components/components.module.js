const angularModule = angular.module('app.components', []);

angularModule.component('custom', require('./custom/custom.component'))

export default angularModule
