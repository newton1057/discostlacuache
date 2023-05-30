"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentManager = void 0;
var Pago_1 = require("./Pago");
var PaymentManager = /** @class */ (function () {
    function PaymentManager(paymentMethod, amount) {
        this.paymentProcessor = new Pago_1.PaymentProcessor();
        this.paymentMethod = paymentMethod;
        this.amount = amount;
    }
    PaymentManager.prototype.processPayment = function (dataAccount) {
        this.paymentProcessor.setPaymentMethod(this.paymentMethod);
        return this.paymentProcessor.doPayment(dataAccount, this.amount);
    };
    return PaymentManager;
}());
exports.PaymentManager = PaymentManager;
