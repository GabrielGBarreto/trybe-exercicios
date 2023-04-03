// Após ter conhecido diferentes maneiras de associar chaves e valores a um objeto, que tal praticar? Adicione suas informações ao objeto student = {}, como nome, e-mail, telefone, GitHub e LinkedIn, usando os métodos abordados no conteúdo.

let student = {}

function addProperty(object, key, value) {
    object[key] = value
}

addProperty(student, 'nome', 'Gabriel Gaspar Barreto');
addProperty(student, 'email', 'ggbarreto@id.uff.br');
addProperty(student, 'telefone', '28 998862526');
addProperty(student, 'LinkedIn', 'https://www.linkedin.com/in/gabrielgasparbarreto/');
addProperty(student, 'GitHub', 'https://github.com/GabrielGBarreto')

console.log(student)
