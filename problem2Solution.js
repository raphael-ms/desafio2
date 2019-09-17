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

  function rightCount(value) {
    return value = 10;
  }
  const byVal = (arr, value) => arr.filter(f => f.includes(value))
  const isAdded = (arr, index) => arr.filter(f => f[index])
  const persons = arr => arr.reduce(function (a, b) { if (!a.includes(b[0])) a.push(b[0]); return a; }, []);
  const input = arr => arr.reduce(function (a, b) { if (!a.includes(b[2])) a.push(b[2]); return a; }, []);



  const getFacts = (facts, schema) => {
    let entidades = persons(facts)
    let naoRepetidas = input(facts)
    let retorno = [];

    schema.map(s => {
      if(s[2] === 'one'){
        entidades.map(e => {
          retorno.push(byVal(byVal(facts, s[0]),e).slice(-1)[0])
        } )    
      }
    })
    schema.map(s => {
      if(s[2] === 'many'){
        naoRepetidas.map(e => {
          let checking = byVal(byVal(facts, s[0]),e).slice(-1)[0]
          if(checking!= null && checking[3]!=false)
            retorno.push(checking)
        } )    
      }
    })

    return retorno
  }

  getFacts(facts, schema)