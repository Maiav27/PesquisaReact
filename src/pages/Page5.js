import {  useState } from "react"
import axios from "axios"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"
const Page5 = () => {
    
    const [filme, setFilme] = useState('')


 
    const fecthData =  () =>{
        const KEY = process.env.REACT_APP_HOST
   
        

            return   axios.get(
                `http://www.omdbapi.com/?apikey=${KEY}&t=${filme}`
               ).then(res => res.data)
    
       

    }

    const {data, isLoading, refetch} = useQuery('filmes', fecthData, {enabled : false} )

    
    
  
    return(
        <div>
            <input type='text'  value={filme} onChange={evt => setFilme(evt.target.value)}/>
            <button onClick={ refetch}>Pesquisar</button> <br/>
            {isLoading && <p>Carregando</p>   }
             
             <label>Título</label>
              <input type='text' value={data?.Title}/>
              <br/>
             <label>Data de lançamento</label>
              <input  type='text' value={data?.Released} />
              <br/>
             <label>Duração</label>
              <input  type='text' value={data?.Runtime} />
              <br/>
             <label>Gênero</label>
              <input  type='text' value={data?.Genre} />
              <br/>
             
              <Link  to='/Page4'><button >Voltar</button></Link>
              
            

        </div>
    )
}

export default Page5