import { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import income from "../../assets/Entradas.svg";
import outcome from "../../assets/Saídas.svg";
import { TransactionsContext } from "../../TransactionsContext";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModaI({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const {createTransaction} = useContext(TransactionsContext)

  const [type, setType] = useState("deposit");
  const [amount, setAmount] = useState(0);
  const [value, setValue] = useState(0);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  function handleCreateNewTransaction(event:FormEvent){
    event.preventDefault()

   createTransaction({
    title, 
    amount: value,
    category,
    type
   })
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
        <input type="number" placeholder="valor" value={amount}  onChange={event=> setAmount(Number(event.target.value))}/>

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
