let clientesTrybeBank = ['Ada', 'John', 'Gus'];



function adicionar(nome){
   if(typeof nome === 'string'){
    clientesTrybeBank.push(nome);
    return 'Cliente adicionado com sucesso'
   } else {
    return 'O parâmetro passado deve ser do tipo "string"'
   }
}

// onsole.log(adicionar(true));
// console.log(adicionar('Joaquim'));
// console.log(clientesTrybeBank)

function removeCliente(cliente) {
  if (typeof cliente === 'string') {
    let clienteEncontrado = false;
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
      if (cliente === clientesTrybeBank[index]) {
        clientesTrybeBank.splice(index, 1);
        clienteEncontrado = true;
        return 'Cliente excluída(o) com sucesso.';
      }
    }

    if (clienteEncontrado === false) {
      return 'Cliente não encontrada(o)'
    }
  } else {
    return 'O parâmetro passado deve ser do tipo "string"!';
  }
};

console.log(removeCliente(false)); // O parâmetro passado deve ser do tipo "string"!
console.log(removeCliente('Barney')); // Cliente não encontrada(o)
console.log(removeCliente('John')); // Cliente excluída(o) com sucesso.
console.log(clientesTrybeBank); // [ 'Ada', 'Gus' ]