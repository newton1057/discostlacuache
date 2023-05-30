"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitcoinProxy = void 0;
var BitcoinProxy = /** @class */ (function () {
    function BitcoinProxy() {
    }
    BitcoinProxy.prototype.doPayment = function (dataAccount, amount) {
        var walletAddress = dataAccount.wallet_address;
        console.log("Payment of $".concat(amount, " will be made using Bitcoin with wallet address: ").concat(walletAddress));
        return true;
    };
    return BitcoinProxy;
}());
exports.BitcoinProxy = BitcoinProxy;
