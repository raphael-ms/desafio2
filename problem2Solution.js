var facts = [
    ['gabriel', 'endereço', 'av rio branco, 109', true],
    ['joão', 'endereço', 'rua alice, 10', true],
    ['joão', 'endereço', 'rua bob, 88', true],
    ['joão', 'telefone', '234-5678', true],
    ['joão', 'telefone', '91234-5555', true],
    ['joão', 'telefone', '234-5678', false],
    ['gabriel', 'telefone', '98888-1111', true],
    ['gabriel', 'telefone', '98888-1111', false],
    ['gabriel', 'telefone', '98888-1111', true],
    ['gabriel', 'telefone', '56789-1010', true],
];

var schema = [
    ['endereço', 'cardinality', 'one'],
    ['telefone', 'cardinality', 'many']
];

const byVal = (arr, value) => arr.filter(f => f.includes(value))
const isAdded = (arr, index) => arr.filter(f => f[index])
const persons = arr => arr.reduce(function (a, b) { if (!a.includes(b[0])) a.push(b[0]); return a; }, []);


const getFacts = (facts, schema) => {
  
let dados = isAdded(facts, 3)
let entidades = persons(dados)
let resultado = [];

 schema.map(s => {
  if(s[2] === 'one'){
    entidades.map(e => {
      resultado.push(byVal(byVal(dados, s[0]),e).slice(-1)[0])
    } )
  }else if(s[2] === 'many'){
    entidades.map(e => {
      let value = (byVal(byVal(dados, s[0]),e))
      value.splice(0,1)
      resultado.push(value)
    } )
  }
})


 return resultado
}

getFacts(facts, schema)