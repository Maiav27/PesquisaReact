import { useStoreActions, useStoreState } from "easy-peasy"
import { useState } from "react"
import { Link } from "react-router-dom"

const Page1 = () => {
    const filmesStore = useStoreState(state => state)

    const setPesquisa = useStoreActions(state => state.setPesquisa)
  

 

 

 
    const salvar = () => {
        filmesStore.nome = nome
        filmesStore.descricao = descricao
        setPesquisa(filmesStore)
    }
    
    const [nome, setNome] = useState(filmesStore.nome)
    const [descricao, setDdescricao] = useState(filmesStore.descricao)
    
    const nomeF = (evt) =>{
         setNome(evt.target.value)
    }
     
    const descricaoF = (evt) =>{
         setDdescricao(evt.target.value)
    }
     
     
  

    
    return(
        <div>
            
            Nome : <input onChange={nomeF} value={nome}/>
            <br/>
           descreva-se <textarea onChange={descricaoF} value={descricao}/>
            <Link to='/Page2'><button onClick={salvar}>Próximo</button></Link>
           
      
        </div>

    )
}

export default Page1