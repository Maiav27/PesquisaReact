import { createStore } from "easy-peasy";
import { pesquisa } from "./pesquisa";
//import { composeWithDevTools } from "remote-redux-devtools";
import { persist } from "easy-peasy";



export const store = createStore(
  persist(  pesquisa )
    
    )
