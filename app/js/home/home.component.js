import controller from './home.controller';
import template from './home.html';

let homeComponent = {
    restrict: 'E',
    bindings: {},
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

export default homeComponent;