import { BitcoinProxy } from "./Bitcoin";

export class BitcoinAdapter {
  private bitcoinProxy: BitcoinProxy;
  private conversionRate: number;

  constructor(conversionRate: number) {
    this.bitcoinProxy = new BitcoinProxy();
    this.conversionRate = conversionRate;
  }

  public doPayment(dataAccount: any, amount: number): boolean {
    const bitcoinAmount = this.convertToBitcoin(amount);
    return this.bitcoinProxy.doPayment(dataAccount, bitcoinAmount);
  }

  private convertToBitcoin(amount: number): number {
    return amount / this.conversionRate;
  }
}
