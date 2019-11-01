type QuickbooksEntityNameOptionsType =
  | 'Account'
  | 'Bill'
  | 'BillPayment'
  | 'Budget'
  | 'Class'
  | 'CreditMemo'
  | 'Currency'
  | 'Customer'
  | 'Department'
  | 'Deposit'
  | 'Employee'
  | 'Estimate'
  | 'Invoice'
  | 'Item'
  | 'JournalCode'
  | 'JournalEntry'
  | 'Payment'
  | 'PaymentMethod'
  | 'Preferences'
  | 'Purchases'
  | 'Purchase'
  | 'PurchaseOrder'
  | 'RefundReceipt'
  | 'SalesReceipt'
  | 'TaxAgency'
  | 'Term'
  | 'TimeActivity'
  | 'Transfer'
  | 'Vendor'
  | 'VendorCredit';

export type ISOStringWithTimeZone = string;

type QuickBooksChangedEntityType = {
  name: QuickbooksEntityNameOptionsType;
  id: string;
  operation: 'Create' | 'Update' | 'Delete' | 'Merge' | 'Void';
  lastUpdated: ISOStringWithTimeZone;
  deletedId?: string; // (only for Merge events): The ID of the entity that was deleted and merged.
};

type dataChangeEventType = {
  entities: QuickBooksChangedEntityType[];
};

type WebhookChunk = {
  /* Although the notification is designed to accommodate multiple RealmIDs, 
    it only uses one at this time. If your app is connected to multiple companies, 
    you will receive multiple eventNotifications (one per RealmID). */
  realmId: string;
  dataChangeEvent: dataChangeEventType;
};

export type QuickBooksEventNotificationsType = WebhookChunk[];
