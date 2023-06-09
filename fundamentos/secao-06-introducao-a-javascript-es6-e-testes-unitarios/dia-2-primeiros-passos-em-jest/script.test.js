const {myRemove, myFizzBuzz, encode, decode, techList, hydrate} = require('./script')

describe('Testa a função myRemove', () => {
    test('Testa se remove o item 3 do array', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    });

    test('Testa se remove o item 3 do array', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    });

    test('Testa se não remove nada ao colocar valor que não existe no array', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    });
});

describe('Testa a função myFizBuzz', () => {
    test('Testa se 15 é divisível por 3 e por 5', () => {
        expect(myFizzBuzz(15)).toMatch('fizzbuzz')
    });
    test('Testa se 9 é divisível por 3', () => {
        expect(myFizzBuzz(9)).toMatch('fizz')
    });
    test('Testa se 10 é divisível por 5', () => {
        expect(myFizzBuzz(10)).toMatch('buzz')
    });
    test('Testa se 17 não é divisível nem por 3 nem por 5', () => {
        expect(myFizzBuzz(17)).toBe(17)
    });
    test('Testa se o retorno é falso quando o parâmetro não é número', () => {
        expect(myFizzBuzz('gato')).toBeFalsy
    });
});

describe('Testa as funções encode e decode', () => {
    it('a função encode é definida', () => {
      expect(encode).toBeDefined();
    });
    it('encode é uma função', () => {
      expect(typeof encode).toEqual('function');
    });
    it('converte apenas a vogal "a" no número 1', () => {
      expect(encode('ana')).toEqual('1n1');
    });
    it('converte a vogal "e" no número 2', () => {
      expect(encode('ele')).toEqual('2l2');
    });
    it('converte a vogal "i" no número 3', () => {
      expect(encode('xixi')).toEqual('x3x3');
    });
    it('converte a vogal "o" no número 4', () => {
      expect(encode('ovo')).toEqual('4v4');
    });
    it('converte a vogal "u" no número 5', () => {
      expect(encode('nu')).toEqual('n5');
    });
    it('checa se o retorno da função tem o mesmo número de caracteres', () => {
      expect(encode('trybe').length).toEqual(5);;
    });
  
    it('a função decode é definida', () => {
      expect(decode).toBeDefined();
    });
    it('decode é uma função', () => {
      expect(typeof decode).toEqual('function');
    });
    it('converte apenas o número 1 na vogal a', () => {
      expect(decode('1n1')).toEqual('ana');
    });
    it('converte apenas o número 2 na vogal e', () => {
      expect(decode('2l2')).toEqual('ele');
    });
    it('converte apenas o número 3 na vogal i', () => {
      expect(decode('x3x3')).toEqual('xixi');
    });
    it('converte apenas o número 4 na vogal o', () => {
      expect(decode('4v4')).toEqual('ovo');
    });
    it('converte apenas o número 5 na vogal u', () => {
      expect(decode('n5')).toEqual('nu');
    });
    it('checa se o retorno da função tem o mesmo número de caracteres', () => {
      expect(decode('trybe').length).toEqual(5);
    });
  });

  describe('Testa a função techList', () => {
    it('Testa se a função techList é definida', () => {
      expect(techList).toBeDefined();
    });
    it('Testa se techList é uma função', () => {
      expect(typeof techList).toBe('function');
    });
    it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
      expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
        {
          tech: 'CSS',
          name: 'Lucas'
        },
        {
          tech: 'HTML',
          name: 'Lucas'
        },
        {
          tech: 'JavaScript',
          name: 'Lucas'
        },
        {
          tech: 'Jest',
          name: 'Lucas'
        },
        {
          tech: 'React',
          name: 'Lucas'
        }
      ]);
    });
    it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
      expect(techList([], 'Lucas')).toBe('Vazio!');
    });
  });
  
  describe('Testa a função hydrate', () => {
    it('Testa se a função hydrate é definida', () => {
      expect(hydrate).toBeDefined();
    });
    it('Testa se hydrate é uma função', () => {
      expect(typeof hydrate).toBe('function');
    });
    it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
      expect(hydrate('1 cerveja')).toBe('1 copo de água');
      expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
      expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
      expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
      expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
    });
  })