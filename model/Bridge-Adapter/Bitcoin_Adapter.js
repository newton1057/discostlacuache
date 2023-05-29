import { BitcoinProxy } from "./Bitcoin";

export class BitcoinAdapter {
    constructor(conversionRate) {
      this.bitcoinProxy = new BitcoinProxy();
      this.conversionRate = conversionRate;
    }
  
    doPayment(dataAccount, amount) {
      const bitcoinAmount = this.convertToBitcoin(amount);
      return this.bitcoinProxy.doPayment(dataAccount, bitcoinAmount);
    }
  
    convertToBitcoin(amount) {
      return amount / this.conversionRate;
    }
  }
  