export class PayPalProxy {
  public doPayment(dataAccount: any, amount: number): boolean {
    const paypalEmail: string = dataAccount.paypal_email;
    console.log(`Payment of $${amount} will be made using PayPal account: ${paypalEmail}`);
    return true;
  }
}
