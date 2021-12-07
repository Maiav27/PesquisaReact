import { useStoreActions, useStoreState } from "easy-peasy"
import { useState } from "react"
import { Link } from "react-router-dom"

const Page3 = () => {
  const filmesStore = useStoreState(state => state)
  const setPesquisa = useStoreActions(state => state.setPesquisa)
  const [ generos, setGeneros] = useState(filmesStore.generos)
  
  const addGeneros = (genero) => {
      if(generos.includes(genero)){
          let generosNovo = generos.filter(generoA => generoA !== genero)
          setGeneros(generosNovo)
        
      }else{
          setGeneros([...generos,genero])
      }
  }
  const salvar = () => {
      filmesStore.generos = generos
      setPesquisa(filmesStore)
  }

  // quando  for voltar edeixar tudo checado 
  //checked={esportes.includes('Futebol')}
    
  

    return(
        <div>
        <label>Escolha os gêneros que lhe interessam :</label>
             <input type='checkbox' value='Ação' checked={generos.includes('Ação')}  onChange={()=> addGeneros('Ação')}/>
             <label>Ação</label>
             <input type='checkbox' value='Aventura' checked={generos.includes('Aventura')} onChange={() => addGeneros('Aventura')}/>

             <label>Aventura</label>
             <input type='checkbox' value='Suspense' checked={generos.includes('Suspense')} onChange={()=>addGeneros('Suspense')}/>
             <label>Suspense</label>
             <input type='checkbox' value='Tiro' checked={generos.includes('Tiro')} onChange={() =>addGeneros('Tiro')}/>
             <label>Tiro</label>
             <input type='checkbox' value='Terror' checked={generos.includes('Terror')} onChange={() => addGeneros('Terror')}/>
             <label>Terror</label>
              
                <Link  to='/Page2'><button onClick={salvar}>Voltar</button></Link>
                <Link  to='/Page4'><button onClick={salvar}>Próximo</button></Link>

             

        </div>
    )
}

export default Page3