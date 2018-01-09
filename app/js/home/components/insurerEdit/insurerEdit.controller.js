class InsurerEditController {
    constructor($location, $http) {
        var vm = this;
        vm.links = {};
        vm.links["Manage Insurers"] = "";
        vm.links["Add/Edit"] = "add-insurer";

        vm.insurer = {
            name: "",
        };

        vm.cancel = () => {
            $location.path('/');
        }

        vm.editInsurer = () => {
            console.log(vm.insurer);
            $http.post("/openmrs/ws/rest/v1/insurer", JSON.stringify(vm.insurer)).then(response => {
                console.log(response);
            }).catch(err => {
               console.log(err);
            });
            $location.path('/');
        }
    }
}

export default InsurerEditController;