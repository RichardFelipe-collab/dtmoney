import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/axios';

interface Transaction{
  id:number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createdAt:string
}

interface TransactionsProviderProps{
  children:ReactNode;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction:TransactionInput)=>void;
}


//type TransactionInput = Omit<Transaction, 'id' | 'cratedAt'>;


export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
  
  );
export function TransactionsProvider({children}: TransactionsProviderProps){

  const [transactions, setTransaction] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("transactions").then((response) => setTransaction(response.data.transactions));
  }, []);

  function createTransaction(transaction: TransactionInput){

    api.post('/transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}
