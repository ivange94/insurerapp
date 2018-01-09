class HomeController {
    constructor(openmrsRest) {
        var vm = this;

        vm.insurers;

        vm.resourceName = "insurer";
        vm.params = {includeAll: true, name: "", limit: 10, startIndex: 0}; //request params
        openmrsRest.listFull(vm.resourceName, vm.params).then(function (response) {
            vm.insurers = response.results;
        });
    }
}

export default HomeController;