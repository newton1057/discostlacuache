import { Data } from "../Whole Part/Data";
import { Gestion_Cuenta } from "../Whole Part/Gestion_Cuenta";


export class StripeProxy {
  public doPayment(dataAccount: Data, amount: number): boolean {
    const cardNumber: string = dataAccount.card_number;
    const expirationDate: string = dataAccount.expiration_date;
    console.log(`Payment of $${amount} will be made using Stripe with card number: ${cardNumber} (Expires: ${expirationDate})`);
    return true;
  }
}
