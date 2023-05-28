import { PaymentManager } from "./Gestion_Pagos";

class DataAccount {
  private paymentMethod: string;
  private accountDetails: any;

  constructor(paymentMethod: string, accountDetails: any) {
    this.paymentMethod = paymentMethod;
    this.accountDetails = accountDetails;
  }

  public getPaymentMethod(): string {
    return this.paymentMethod;
  }

  public getAccountDetails(): any {
    return this.accountDetails;
  }
}

const paymentMethod: string = 'paypal';
const amount: number = 100;
const accountDetails: any = {
  paypal_email: 'example@example.com',
  card_number: '1234 5678 9012 3456',
  expiration_date: '12/24',
  wallet_address: '1ABCxyz'
};

const dataAccount: DataAccount = new DataAccount(paymentMethod, accountDetails);

const paymentManager: PaymentManager = new PaymentManager(paymentMethod, amount);
paymentManager.processPayment(dataAccount);
