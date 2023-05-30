"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Gestion_Pagos_1 = require("./Gestion_Pagos");
var DataAccount = /** @class */ (function () {
    function DataAccount(paymentMethod, accountDetails) {
        this.paymentMethod = paymentMethod;
        this.accountDetails = accountDetails;
    }
    DataAccount.prototype.getPaymentMethod = function () {
        return this.paymentMethod;
    };
    DataAccount.prototype.getAccountDetails = function () {
        return this.accountDetails;
    };
    return DataAccount;
}());
var paymentMethod = 'bitcoin';
var amount = 100;
var accountDetails = {
    paypal_email: 'example@example.com',
    card_number: '1234 5678 9012 3456',
    expiration_date: '12/24',
    wallet_address: '1ABCxyz'
};
var dataAccount = new DataAccount(paymentMethod, accountDetails);
var paymentManager = new Gestion_Pagos_1.PaymentManager(paymentMethod, amount);
paymentManager.processPayment(accountDetails);
