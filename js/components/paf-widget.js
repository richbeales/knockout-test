define(["require", "exports", 'jquery'], function (require, exports, $) {
    "use strict";
    var Address = (function () {
        function Address() {
        }
        return Address;
    }());
    exports.Address = Address;
    var AddressViewModel = (function () {
        function AddressViewModel() {
            this.resetAddress = function () {
                this.chosenAddress(null);
            };
            this.searchAddress = function () {
                var my = this;
                $.getJSON("http://someapisomewheresecret.co.uk/API/AddressListAPI/" + this.postcode(), function (data) {
                    var count = 0;
                    $.each(JSON.parse(data), function (i, d) {
                        my.addresses.push(d);
                        count++;
                    });
                    if (count > 0) {
                    }
                    else {
                        alert("No results for " + this.postCode());
                    }
                });
            };
            this.addresses = ko.observableArray();
            this.chosenAddress = ko.observable();
            this.postcode = ko.observable();
        }
        return AddressViewModel;
    }());
    exports.AddressViewModel = AddressViewModel;
});
//# sourceMappingURL=paf-widget.js.map