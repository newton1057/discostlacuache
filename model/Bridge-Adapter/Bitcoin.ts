import { Data } from "../Whole Part/Data";
import { Gestion_Cuenta } from "../Whole Part/Gestion_Cuenta";

export class BitcoinProxy {
  public doPayment(dataAccount: Data, amount: number): boolean {
    const walletAddress = dataAccount.wallet_address;
    console.log(`Payment of $${amount} will be made using Bitcoin with wallet address: ${walletAddress}`);
    return true;
  }
}
