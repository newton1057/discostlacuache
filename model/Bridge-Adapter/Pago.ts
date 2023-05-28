import { BitcoinAdapter } from "./Bitcoin_Adapter";
import { StripeProxy } from "./Tarjeta";
import { PayPalProxy } from "./PayPal"

export class PaymentProcessor {
  private paymentMethod: PayPalProxy | StripeProxy | BitcoinAdapter | null;

  constructor() {
    this.paymentMethod = null;
  }

  public setPaymentMethod(paymentMethod: string): void {
    switch (paymentMethod) {
      case 'paypal':
        this.paymentMethod = new PayPalProxy();
        break;
      case 'stripe':
        this.paymentMethod = new StripeProxy();
        break;
      case 'bitcoin':
        this.paymentMethod = new BitcoinAdapter(1000);
        break;
      default:
        throw new Error('Invalid payment method.');
    }
  }

  public doPayment(dataAccount: any, amount: number): boolean {
    if (!this.paymentMethod) {
      throw new Error('Payment method not set.');
    }

    return this.paymentMethod.doPayment(dataAccount, amount);
  }
}
