class HomeController {
    constructor(openmrsRest) {
        var vm = this;

        vm.insurers;

        //Properties for list component
        vm.resource = "conceptclass";
        vm.disableLinks = true;
        vm.limit = 10; //Default value
        vm.columns= [
            {
                "property": "name",
                "label": "Name"
            },
            {
                "property": "description",
                "label":"Description"
            },
            {
                "property": "uuid",
                "label": "UUID"
            }];
        vm.actions = [
            {
                "action":"edit",
                "label":"Edit",
                "link":"#/class/{uuid}"
            },
            {
                "action":"retire",
                "label":"Retire"
            },
            {
                "action":"unretire",
                "label":"unretire"
            }
        ];
    }
}

export default HomeController;