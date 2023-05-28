import { PaymentProcessor } from "./Pago";
import { Data } from "../Whole Part/Data";

export class PaymentManager {
  private paymentProcessor: PaymentProcessor;
  private paymentMethod: string;
  private amount: number;

  constructor(paymentMethod: string, amount: number) {
    this.paymentProcessor = new PaymentProcessor();
    this.paymentMethod = paymentMethod;
    this.amount = amount;
  }

  public processPayment(dataAccount: Data): boolean {
    this.paymentProcessor.setPaymentMethod(this.paymentMethod);
    return this.paymentProcessor.doPayment(dataAccount, this.amount);
  }
}
