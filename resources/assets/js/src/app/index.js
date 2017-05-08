require('./index.style.scss');

const angular = require('angular');
const angularModule = angular.module('app', []);

angularModule.component('hello', require('./views/hello/hello.component').default);
angularModule.component('custom', require('./components/custom/custom.component').default);

export default angularModule;
