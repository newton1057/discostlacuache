export class BitcoinProxy {
  public doPayment(dataAccount: any, amount: number): boolean {
    const walletAddress = dataAccount.wallet_address;
    console.log(`Payment of $${amount} will be made using Bitcoin with wallet address: ${walletAddress}`);
    return true;
  }
}
