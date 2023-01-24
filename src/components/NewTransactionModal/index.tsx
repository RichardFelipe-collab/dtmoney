import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";
import income from '../../assets/Entradas.svg'
import outcome from '../../assets/Saídas.svg'
import closeImg from "../../assets/close.svg";
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModaI({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
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
      <Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="titulo" />
        <input type="number" placeholder="valor" />
        
        <TransactionTypeContainer>
          <button type="button"><img src={income} alt="Entrada" />
          <span>Entrada</span>
          </button>
          <button type="button">
            <img src={outcome} alt="Saida" />
            <span>Saidas</span>
          </button>
        </TransactionTypeContainer>
                <input type="text" placeholder="categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
