import iconimg from '../../assets/Entradas.svg';
import outconimg from '../../assets/Saídas.svg';
import totaliconimg from '../../assets/Total.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { Container } from "./styles";

export function Summary() {
  const {transactions} = useTransactions()
  console.log(transactions)

  // const total = transactions.reduce((acc, transaction)=>{
  //   if(transaction.type === 'deposit'){
  //     return acc + transaction.amount
  //   }

  //   return acc;
  // }, 0)

  const summary = transactions.reduce((acc, transaction)=>{
    if(transaction.type === 'deposit'){
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    }else{
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  },{
    deposits: 0,
    withdraws: 0,
    total: 0,
  })


  return (
    <Container>

       
      <div>
        <header>
          <p>Entrada</p>
          <img src={iconimg} alt="Entradas" />
        </header>
        <strong>{ new Intl.NumberFormat('pt-BR',{ 
                  style: 'currency',
                  currency: 'BRL'
                }).format(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saidas </p>
          <img src={outconimg} alt="Saidas" />
        </header>
        <strong>
        { new Intl.NumberFormat('pt-BR',{ 
            style: 'currency',
            currency: 'BRL'
            }).format(summary.withdraws)}
          </strong>
      </div>
      <div className="high-light-background">
        <header>
          <p>Total</p>
          <img src={totaliconimg} alt="Total" />
        </header>
        <strong>{ new Intl.NumberFormat('pt-BR',{ 
            style: 'currency',
            currency: 'BRL'
            }).format(summary.total)} </strong>
      </div>
    </Container>
  );
}
