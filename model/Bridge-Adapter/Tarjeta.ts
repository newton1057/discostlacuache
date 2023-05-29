export class StripeProxy {
  public doPayment(dataAccount: any, amount: number): boolean {
    const cardNumber: string = dataAccount.card_number;
    const expirationDate: string = dataAccount.expiration_date;
    console.log(`Payment of $${amount} will be made using Stripe with card number: ${cardNumber} (Expires: ${expirationDate})`);
    return true;
  }
}
