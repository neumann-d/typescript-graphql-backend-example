export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
   __typename?: 'Mutation';
  addPayment?: Maybe<PaymentItem>;
  updatePayment?: Maybe<PaymentItem>;
};


export type MutationAddPaymentArgs = {
  payment: PaymentItemAddInput;
};


export type MutationUpdatePaymentArgs = {
  payment: PaymentItemUpdateInput;
};

export type PaymentItem = {
   __typename?: 'PaymentItem';
  id?: Maybe<Scalars['Int']>;
  contractId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['String']>;
  isImported?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
};

export type PaymentItemAddInput = {
  contractId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  value: Scalars['Float'];
  time: Scalars['String'];
};

export type PaymentItemUpdateInput = {
  id: Scalars['Int'];
  contractId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['String']>;
  isImported?: Maybe<Scalars['Boolean']>;
};

export type Payments = {
   __typename?: 'Payments';
  sum?: Maybe<Scalars['Float']>;
  items?: Maybe<Array<Maybe<PaymentItem>>>;
};

export type Query = {
   __typename?: 'Query';
  payments?: Maybe<Payments>;
};


export type QueryPaymentsArgs = {
  contractId?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
};
