import { Container } from "./styles";
import {useContext} from 'react'
import iconimg from '../../assets/Entradas.svg'
import outconimg from '../../assets/Saídas.svg'
import totaliconimg from '../../assets/Total.svg'
import {TransactionsContext} from '../../TransactionsContext';

export function Summary() {
  const data = useContext(TransactionsContext)


  return (
    <Container>
      <TransactionsContext.Consumer>

        {(data)=>{
          
            console.log(data)

            return <p>ok</p>
          
        }}
      </TransactionsContext.Consumer>

      <div>
        <header>
          <p>Entrada</p>
          <img src={iconimg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas </p>
          <img src={outconimg} alt="Saidas" />
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="high-light-background">
        <header>
          <p>Total</p>
          <img src={totaliconimg} alt="Total" />
        </header>
        <strong>- R$500,00</strong>
      </div>
    </Container>
  );
}
