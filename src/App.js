
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Page1, Page2, Page3, Page4, Page5} from './pages'
import { StoreProvider } from 'easy-peasy';
import { store } from './store/store';

function App() {
  return (
    <div className="App">
      <StoreProvider  store={store}>
         <BrowserRouter>
             <Routes>
                <Route path='/' element={<Page1/>}/>
                <Route path='/Page2' element={<Page2/>}/>
                <Route path='/Page3' element={<Page3/>}/>
                <Route path='/Page4' element={<Page4/>}/>
                <Route path='/Page5' element={<Page5/>}/>
                
             </Routes>
         </BrowserRouter>
      </StoreProvider>
    </div>
  );
}

export default App;
