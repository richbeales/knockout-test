///<reference path="../../node_modules/retyped-jquery-tsd-ambient/jquery.d.ts"/>
import * as $ from 'jquery';

export class Address {
    Organisation: string;
    AddressLine1: string;
    AddressLine2: string;
    City: string;
    Postcode: string;
}

export class AddressViewModel {
    addresses: KnockoutObservableArray<Address>;
    chosenAddress: KnockoutObservable<Address>;
    postcode: KnockoutObservable<string>;

    constructor() {
        this.addresses = ko.observableArray<Address>();
        this.chosenAddress = ko.observable<Address>();
        this.postcode = ko.observable<string>();
    }

    resetAddress = function () {
        this.chosenAddress(null);
    };

    searchAddress = function () {
        var my = this;
        $.getJSON("http://someapisomewheresecret.co.uk/API/AddressListAPI/" + this.postcode(),
            function (data) {
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
    }
}