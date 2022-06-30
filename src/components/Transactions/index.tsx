import { useEffect } from "react";
import { api } from "../../services/axios";
import { Container } from "./styles";

export function TransactionTable() {
  useEffect(() => {
    api
      .get("http://localhost:3000/api/transactions")
      .then((response) => console.log(response.data));
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
          <tr>
            <td> Desenvolvimento de website</td>
            <td className="deposit"> R$12.000</td>
            <td> Serviço</td>
            <td> 19/05/2022</td>
          </tr>
          <tr>
            <td> Aluguel de casa</td>
            <td className="withdraw"> - R$4.000</td>
            <td> Custos</td>
            <td> 18/05/2022</td>
          </tr>
          <tr>
            <td> Computador</td>
            <td className="deposit"> R$7.000</td>
            <td> Venda</td>
            <td> 30/05/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
