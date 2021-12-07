
import { useStoreState } from "easy-peasy"
import { Link } from "react-router-dom"
const Page4 = () => {

     const filmesStore = useStoreState(state => state)
  return(
      <div>
         
         Nome : {filmesStore.nome}
         <br/>
         Descrição : {filmesStore.descricao}
         <br/>
          Possui filme favorito : {filmesStore.possuiFavorito}
          <br/>
          filme favorito : {filmesStore.filmeFavorito}
          <br/>
          Gêneros : {filmesStore.generos.map(genero => <li>{genero}</li>)}

          <Link  to='/Page3'><button>Voltar</button></Link>
          <Link  to='/Page5'><button >Próximo</button></Link>
         
      </div>
  )
}
export default Page4