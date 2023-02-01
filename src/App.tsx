import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModaI } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')
export function App() {
  const [isNewTrasactionModalIsOpen, setIsNewTrasactionModalIsOpen] =
    useState(false);
    

  function openModal() {
    setIsNewTrasactionModalIsOpen(true);
  }



  function closeModal() {
    setIsNewTrasactionModalIsOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={openModal} />
      
      <Dashboard />
      <NewTransactionModaI
        isOpen={isNewTrasactionModalIsOpen}
        onRequestClose={closeModal}
      />
      <GlobalStyle />
    </TransactionsProvider >
  );
}

export default App;
