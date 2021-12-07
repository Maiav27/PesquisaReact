import { action } from "easy-peasy"

export const pesquisa = {
    nome : '',
    descricao : '',

    possuiFavorito : '',
    filmeFavorito : '',
    
    generos : [],

    
    setPesquisa : action((state, payload)=>{
        
      state = payload

    })
    

    
    

}