import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import UserContainer from './containers/UserContainer';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div>Main page</div>}></Route>
          <Route path='/user' element={<UserContainer/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
