import { PaymentProcessor } from "./Pago";

export class PaymentManager {
  private paymentProcessor: PaymentProcessor;
  private paymentMethod: string;
  private amount: number;

  constructor(paymentMethod: string, amount: number) {
    this.paymentProcessor = new PaymentProcessor();
    this.paymentMethod = paymentMethod;
    this.amount = amount;
  }

  public processPayment(dataAccount: any): boolean {
    this.paymentProcessor.setPaymentMethod(this.paymentMethod);
    return this.paymentProcessor.doPayment(dataAccount, this.amount);
  }
}
