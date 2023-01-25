import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import income from "../../assets/Entradas.svg";
import outcome from "../../assets/Saídas.svg";
import closeImg from "../../assets/close.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/axios";
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModaI({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  function handleCreateNewTransaction(event:FormEvent){
    event.preventDefault()

    const data = {
      title,
      value,
      category,
      type,
    }

    api.post('/transactions', data)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className={"react-modal-content"}
    >
      <button type="button" onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar modal" className="react-modal-close" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="titulo" value={title} onChange={event=> setTitle(event.target.value)}/>
        <input type="number" placeholder="valor" value={value}  onChange={event=> setValue(Number(event.target.value))}/>

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}

            activeColor="green"
            isActive={type === "deposit"}
          >
            <img src={income} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcome} alt="Saida" />
            <span>Saidas</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input type="text" placeholder="categoria" value={category} onChange={event=> setCategory(event.target.value)} />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
