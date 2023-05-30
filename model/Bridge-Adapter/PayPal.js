"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayPalProxy = void 0;
var PayPalProxy = /** @class */ (function () {
    function PayPalProxy() {
    }
    PayPalProxy.prototype.doPayment = function (dataAccount, amount) {
        var paypalEmail = dataAccount.paypal_email;
        console.log("Payment of $".concat(amount, " will be made using PayPal account: ").concat(paypalEmail));
        return true;
    };
    return PayPalProxy;
}());
exports.PayPalProxy = PayPalProxy;
