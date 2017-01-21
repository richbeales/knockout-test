    ///<reference path="../node_modules/retyped-knockout-tsd-ambient/knockout.d.ts"/>

    import * as ko from 'knockout';
    import {AddressViewModel, Address} from './components/paf-widget';

    ko.components.register('paf-address', {
        viewModel: AddressViewModel, // { require: 'components/paf-widget' },
        template: { require: 'text!components/paf-widget.html' }
    });

    class AddressesViewModel {
        addressList: KnockoutObservableArray<AddressViewModel>;

        constructor() {
            this.addressList = ko.observableArray<AddressViewModel>();
        }

        addAddress = function () {
            alert(ko.toJSON(this)); // returns {"addressList":[{}]}

            var childVm = new AddressViewModel();
            alert(ko.toJSON(childVm)); // returns {}
            childVm.chosenAddress(new Address());
            childVm.chosenAddress().Organisation = "Test";
            alert(ko.toJSON(childVm)); // returns {}

            var a = new Address();
            a.AddressLine1 = "The Street";
            alert(ko.toJSON(a)); // returns {"AddressLine1":"The Street"}

            this.addressList.push(childVm);
        }
    }

    var vm = new AddressesViewModel();
    ko.applyBindings(vm);