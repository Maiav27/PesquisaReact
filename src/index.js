import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from 'easy-peasy';
import { store } from './store/store';
import {useStoreRehydrated} from 'easy-peasy'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

const WaitForStateRehydration = ({children}) =>{
  const isRehydrated = useStoreRehydrated()
  return isRehydrated ? children : null;
}

ReactDOM.render(

  <React.StrictMode>
   <QueryClientProvider client={queryClient}>
    <StoreProvider store={store}>
      <WaitForStateRehydration>
        <App />
      </WaitForStateRehydration>
      </StoreProvider>
     </QueryClientProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
