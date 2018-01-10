class HomeController {
    constructor(openmrsRest, $location, openmrsNotification, $state) {
        var vm = this;

        vm.insurers;

        vm.resourceName = "insurer";
        vm.params = {includeAll: true, name: "", limit: 10, startIndex: 0}; //request params
        openmrsRest.listFull(vm.resourceName, vm.params).then(function (response) {
            vm.insurers = response.results;
        });

        vm.delete = (insurer, index) => {
            openmrsRest.retire(vm.resourceName, insurer, "Delete insurer").then(function (result) {
                vm.insurers.splice(index, 1);
            }, function (err) {
                openmrsNotification.error(err.data.error.fieldErrors.name[0].message);
            });
        }
    }
}

export default HomeController;