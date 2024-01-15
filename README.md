# Shorten Firebase

E aí, galera! 👋 Bem-vindo ao Shorten Firebase, um projeto massa que vai facilitar sua vida na hora de escrever código! 🚀

## O que é isso?

O Shorten Firebase é um conjunto de funções que vão ajudar a reduzir o tamanho do teu código com o firebase. É tipo um superpoder para desenvolvedores! 😃

## Como usar

É fácil! Só colar esse código mágico na tag `<script>` do teu projeto:

<!-- ```html
<script src="https://raw.githubusercontent.com/henrilima/shorten-firebase/main/app.front.js"></script>
``` -->

E pronto! Agora você tem o poder do Shorten Firebase nas suas mãos. 💪

## Funções disponíveis

```js
const database = shorten(firebase, true);

database.set("users", { id: 1 }); // Set a new object in the database

database.push("users", { nome: "Henri", balance: 1000 }); // Push new data in database

database.remove("users/1"); // Delete data in this ref

database.add("users/1", "balance", 400); // Add or remove number values
database.add("users/1", "balance", -200); // Add or remove number values
```

E muito mais! Dá uma olhada no código para descobrir todas as maravilhas. 😄
