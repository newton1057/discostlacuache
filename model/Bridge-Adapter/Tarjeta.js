"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeProxy = void 0;
var StripeProxy = /** @class */ (function () {
    function StripeProxy() {
    }
    StripeProxy.prototype.doPayment = function (dataAccount, amount) {
        var cardNumber = dataAccount.card_number;
        var expirationDate = dataAccount.expiration_date;
        console.log("Payment of $".concat(amount, " will be made using Stripe with card number: ").concat(cardNumber, " (Expires: ").concat(expirationDate, ")"));
        return true;
    };
    return StripeProxy;
}());
exports.StripeProxy = StripeProxy;
