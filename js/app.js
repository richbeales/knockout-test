define(["require", "exports", 'knockout', './components/paf-widget'], function (require, exports, ko, paf_widget_1) {
    "use strict";
    ko.components.register('paf-address', {
        viewModel: paf_widget_1.AddressViewModel,
        template: { require: 'text!components/paf-widget.html' }
    });
    var AddressesViewModel = (function () {
        function AddressesViewModel() {
            this.addAddress = function () {
                alert(ko.toJSON(this));
                var childVm = new paf_widget_1.AddressViewModel();
                alert(ko.toJSON(childVm));
                childVm.chosenAddress(new paf_widget_1.Address());
                childVm.chosenAddress().Organisation = "Test";
                alert(ko.toJSON(childVm));
                var a = new paf_widget_1.Address();
                a.AddressLine1 = "The Street";
                alert(ko.toJSON(a));
                this.addressList.push(childVm);
            };
            this.addressList = ko.observableArray();
        }
        return AddressesViewModel;
    }());
    var vm = new AddressesViewModel();
    ko.applyBindings(vm);
});
//# sourceMappingURL=app.js.map