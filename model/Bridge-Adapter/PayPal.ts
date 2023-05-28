import { Data } from "../Whole Part/Data";
import { Gestion_Cuenta } from "../Whole Part/Gestion_Cuenta";

export class PayPalProxy {
  public doPayment(dataAccount: Data, amount: number): boolean {
    const paypalEmail: string = dataAccount.paypal_email;
    console.log(`Payment of $${amount} will be made using PayPal account: ${paypalEmail}`);
    return true;
  }
}
