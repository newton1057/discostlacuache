"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentProcessor = void 0;
var Bitcoin_Adapter_1 = require("./Bitcoin_Adapter");
var Tarjeta_1 = require("./Tarjeta");
var PayPal_1 = require("./PayPal");
var PaymentProcessor = /** @class */ (function () {
    function PaymentProcessor() {
        this.paymentMethod = null;
    }
    PaymentProcessor.prototype.setPaymentMethod = function (paymentMethod) {
        switch (paymentMethod) {
            case 'paypal':
                this.paymentMethod = new PayPal_1.PayPalProxy();
                break;
            case 'stripe':
                this.paymentMethod = new Tarjeta_1.StripeProxy();
                break;
            case 'bitcoin':
                this.paymentMethod = new Bitcoin_Adapter_1.BitcoinAdapter(1000);
                break;
            default:
                throw new Error('Invalid payment method.');
        }
    };
    PaymentProcessor.prototype.doPayment = function (dataAccount, amount) {
        if (!this.paymentMethod) {
            throw new Error('Payment method not set.');
        }
        return this.paymentMethod.doPayment(dataAccount, amount);
    };
    return PaymentProcessor;
}());
exports.PaymentProcessor = PaymentProcessor;
