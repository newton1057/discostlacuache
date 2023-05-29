import { BitcoinAdapter } from "./Bitcoin_Adapter";
import { StripeProxy } from "./Tarjeta";
import { PayPalProxy } from "./PayPal"

export class PaymentProcessor {
    constructor() {
      this.paymentMethod = null;
    }
  
    setPaymentMethod(paymentMethod) {
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
  
    doPayment(dataAccount, amount) {
      if (!this.paymentMethod) {
        throw new Error('Payment method not set.');
      }
  
      return this.paymentMethod.doPayment(dataAccount, amount);
    }
  }
  