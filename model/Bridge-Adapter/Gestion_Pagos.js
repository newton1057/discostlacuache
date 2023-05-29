import { PaymentProcessor } from "./Pago";

export class PaymentManager {
    constructor(paymentMethod, amount) {
      this.paymentProcessor = new PaymentProcessor();
      this.paymentMethod = paymentMethod;
      this.amount = amount;
    }
  
    processPayment(dataAccount) {
      this.paymentProcessor.setPaymentMethod(this.paymentMethod);
      return this.paymentProcessor.doPayment(dataAccount, this.amount);
    }
  }
  