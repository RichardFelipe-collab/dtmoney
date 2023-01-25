import { useEffect, useState } from "react";
import { api } from "../../services/axios";
import { Container } from "./styles";

interface Transaction{
  id:number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createdAt:string
}
export function TransactionTable() {
  const [transactions, setTransaction] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("transactions").then((response) => setTransaction(response.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr>
                <td key={transaction.id}> {transaction.title}</td>
                <td className={transaction.type}> {transaction.amount}</td>
                <td> {transaction.category} </td>
                <td> {transaction.createdAt} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
