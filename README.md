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

## removeCsAway

```javascript
const removeCsAway = (cs, customerSuccessAway) =>
  cs.filter((csw) => !customerSuccessAway.includes(csw.id));
```

Essa tem como responsabilidade retornar apenas Customers Success que não estão de folga e deveriam estar trabalhando. Para isso filtro o array de todos os Customers Success filtrando por apenas os Customers Success que não tem o id na lista dos Customer Success que estão de folga

## sortArray

```javascript
const sortArray = (arr) => arr.sort((a, b) => (a.score < b.score ? -1 : 1));
```

Essa função tem como responsabilidade reordenar a lista em ordem crescente, ela recebe como parametro um array e aplica o sort comparando um item com o outro e reordenano o array passado como parametro e no fim ela retorna um outro array.

## groupCSSByCs

```javascript
function groupCSSByCs(customers, customerSuccess) {
  return customers.reduce((accumulator, current) => {
    const css = customerSuccess.find(({ score }) => current.score <= score);

    if (!css) return accumulator;

    accumulator[String(css.id)] = (accumulator[css.id] || 0) + 1;

    return accumulator;
  }, {});
}
```

Essa função tem como responsabilidade retornar um agrupado de {[customer Succes ID]: total atendido}.
Sendo assim ele retorna um grupo facilitando a contagem.

## findBestCSS

```javascript
function findBestCSS(customerBySuccess) {
  const css = Object.entries(customerBySuccess);

  const bestCSS = Math.max(...css.map(([_, count]) => count));

  return css.filter(([_, count]) => count === bestCSS);
}
```

Essa função recebe um grupo de {[customer Succes ID]: total atendido} e pega todas as entradas verifica a maior entrada e retorna um array de arrays com o maior ou os maiores objetos de customer success que atenderam customers

e por fim

```
 return bestCSS.length === 1 ? Number(bestCSS[0][0]) : 0;
```

verificamos se o array de bestCSS tem 1 ou mais items e caso tenha mais de 1 ele retorna 0 pois significa que customers success atenderam o mesmo número de customers, caso não tenha mais de 1 ele retorna o único customer Success
