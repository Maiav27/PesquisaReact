import { useStoreActions, useStoreState } from "easy-peasy"
import { useState } from "react"
import { Link } from "react-router-dom"

const Page2 = () =>{
   const filmeStore = useStoreState(state => state)
   const setPesquisa = useStoreActions(state => state.setPesquisa)
  
   const [filme , setFilme] = useState(filmeStore.possuiFavorito)
   const [filmeFavorito, setFilmeFavorito] = useState(filmeStore.filmeFavorito)

   const salvar = () => {
        filmeStore.possuiFavorito = filme
        filmeStore.filmeFavorito = filmeFavorito
        setPesquisa(filmeStore)
   }

   const filmeF = evt => {

       setFilme(evt.target.value)
   }
   const filmeFavoritoF = evt => {
       setFilmeFavorito(evt.target.value)
   }
   
   console.log(filme)
   
    return(
        <div>
             <p>Você tem algum filme favorito ?</p>
              <input type='radio' name='filme' checked={filme === 'Sim'} value='Sim' onChange={filmeF} />
              <label>Sim</label>
              <input type='radio' name='filme' checked={filme === 'Não'} value='Não' onChange={filmeF } />
              <label>Não</label>
              {filme === 'Sim' &&
                 <div>
                        <label>Nome do filme : </label>
                        <input onChange={filmeFavoritoF} value={filmeFavorito}  />
                </div>
                 }
              <Link  to='/'><button onClick={salvar}>Voltar</button></Link>
              <Link  to='/Page3'><button onClick={salvar}>Próximo</button></Link>
        </div>
    )
}

export default Page2