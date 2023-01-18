import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModaI } from "./components/NewTransactionModal";

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
    <>
      <Header onOpenNewTransactionModal={openModal}/>
      <Dashboard />
     <NewTransactionModaI
     isOpen={isNewTrasactionModalIsOpen}
     onRequestClose={closeModal}
     />
      <GlobalStyle />
    </>
  );
}

export default App;
