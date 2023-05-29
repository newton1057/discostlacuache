import { Data } from "./Data";
import { Gestion_Cuenta } from "./Gestion_Cuenta";

export class PayPalProxy {
    doPayment(dataAccount, amount) {
      const paypalEmail = dataAccount.paypal_email;
      console.log(`Payment of $${amount} will be made using PayPal account: ${paypalEmail}`);
      return true;
    }
  }