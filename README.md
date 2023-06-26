# Javascript

## Como rodar os testes

No terminal, execute os comandos:

```bash
yarn
yarn test
```

Ou usando o NPM:

```bash
npm install
npm test
```

# RD-TEST

O objetivo era entender qual Customers Success atendeu mais Customers.

durante o teste receberemos dados de Customers Success e Customers com a seguinte tipagem

```javascript
{
  id: number;
  score: number;
}
[];
```

e temos que encontrar com base na lógica requerida pelo teste qual Customer Succes atendeu mais Customers.

Criei quatro funções que cada uma com sua responsabilidade única sendo a primeira em ordem

```javascript
const removeCsAway = (cs, customerSuccessAway) =>
  cs.filter((csw) => !customerSuccessAway.includes(csw.id));
```

essa tem como responsabilidade retornar apenas Customers Success que não estão de folga e deveriam estar trabalhando. Para isso filtro o array de todos os Customers Success filtrando por apenas os Customers Success que não tem o id na lista dos Customer Success que estão de folga
