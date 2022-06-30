import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";

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
      <Modal isOpen={isNewTrasactionModalIsOpen} onRequestClose={closeModal}>
        <h2>Cadastrar Transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}

export default App;
