function validar(s) {
    const palabra = "hola";
    let indice = 0;
    
    for(let i = 0; i < s.length; i++) {
      if(s[i] === palabra[indice]) {
        indice++;
        if(indice === palabra.length) {
          return "VERDADERO";
        }
      }
    }
    
    return "FALSO";
  }


