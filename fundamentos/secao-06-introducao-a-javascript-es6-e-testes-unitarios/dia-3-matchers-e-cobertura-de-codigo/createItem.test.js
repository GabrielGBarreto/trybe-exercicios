const createItem = require('./createItem');

describe('a função createItem', () => {
  it('cria um item válido', () => {
    expect(createItem('banana', 'kg', 1.99, 20)).toEqual({ name: 'banana', unit: 'kg', price: 1.99, quantity: 20 })
  });

  it('utiliza zero como quantidade padrão', () => {
    expect(createItem('laranja', 'gramas', 3.15)).toEqual({ name: 'laranja', unit: 'gramas', price: 3.15, quantity: 0 })
  });

  it('Lança um erro quando não recebe parâmetros', () => {
    expect( () => { createItem() }).toThrow(new Error('O nome do item deve ser uma string'))
  });

  it('Lança um erro se o nome do item não é uma string', () => {
    expect( () => { createItem() }).toThrow(new Error('O nome do item deve ser uma string'))
  });

  it('Lança um erro se o preço é negativo', () => {
    expect( () => { createItem('pêssego', 'kg', -1.4, 31) }).toThrow(new Error('O preço do item deve ser maior que zero'))
  });

  it('Lança um erro se o preço é negativo', () => {
    expect( () => { createItem('mamão', 'gramas', 0, 134) }).toThrow(new Error('O preço do item deve ser maior que zero'))
  });
});