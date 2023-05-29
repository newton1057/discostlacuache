import { PaymentManager } from "./Gestion_Pagos";

class DataAccount {
    constructor(paymentMethod, accountDetails) {
      this.paymentMethod = paymentMethod;
      this.accountDetails = accountDetails;
    }
  
    getPaymentMethod() {
      return this.paymentMethod;
    }
  
    getAccountDetails() {
      return this.accountDetails;
    }
  }
  
  // Simulated PaymentManager class
  
  const paymentMethod = 'paypal';
  const amount = 100;
  const accountDetails = {
    paypal_email: 'example@example.com',
    card_number: '1234 5678 9012 3456',
    expiration_date: '12/24',
    wallet_address: '1ABCxyz'
  };
  
  const dataAccount = new DataAccount(paymentMethod, accountDetails);
  
  const paymentManager = new PaymentManager(paymentMethod, amount);
  paymentManager.processPayment(dataAccount);
  