"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitcoinAdapter = void 0;
var Bitcoin_1 = require("./Bitcoin");
var BitcoinAdapter = /** @class */ (function () {
    function BitcoinAdapter(conversionRate) {
        this.bitcoinProxy = new Bitcoin_1.BitcoinProxy();
        this.conversionRate = conversionRate;
    }
    BitcoinAdapter.prototype.doPayment = function (dataAccount, amount) {
        var bitcoinAmount = this.convertToBitcoin(amount);
        return this.bitcoinProxy.doPayment(dataAccount, bitcoinAmount);
    };
    BitcoinAdapter.prototype.convertToBitcoin = function (amount) {
        return amount / this.conversionRate;
    };
    return BitcoinAdapter;
}());
exports.BitcoinAdapter = BitcoinAdapter;
