const createEmployee = (fullName) => {
    const email = fullName.toLowerCase().replace(' ', '_');
    return {fullName, email: `${email}@trybe.com`};
};

const newEmployees = (createEmplyoee) => {
  const employees = {
    id1: createEmployee('Pedro Guerra'), 
    id2: createEmployee('Luiza Drumond'), 
    id3: createEmployee('Carla Paiva'), 
  }
  return employees;
};





const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};




const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const findBirthDate = books.find((element) => element.author.birthYear === 1947).author.name;

const smallerName = () => {
    let nameBook;
    books.forEach((element) => {
        if (!nameBook || element.name.length < nameBook.length) {
            nameBook = element.name
        }
    });
    return nameBook;
};

const getNamedBook = books.find((element) => element.name.length === 26)

const everyoneWasBornOnSecXX = books.every((element) => element.author.birthYear >= 1901 && element.author.birthYear <= 2000);

const someBookWasReleaseOnThe80s = books.some((element) => element.releaseYear >= 1981 && element.releaseYear <= 1990);

const authorUnique = () => {
    return books.every((book) =>
    !books.some((bookSome) =>
        (bookSome.author.birthYear === book.author.birthYear)
        && (bookSome.author.name !== book.author.name)));
};
