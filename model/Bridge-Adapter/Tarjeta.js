import { Data } from "./Data";
import { Gestion_Cuenta } from "./Gestion_Cuenta";

export class StripeProxy {
    doPayment(dataAccount, amount) {
      const cardNumber = dataAccount.card_number;
      const expirationDate = dataAccount.expiration_date;
      console.log(`Payment of $${amount} will be made using Stripe with card number: ${cardNumber} (Expires: ${expirationDate})`);
      return true;
    }
  }