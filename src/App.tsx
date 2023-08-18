import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './layout/Layout';
import { Home } from './pages/HomePage';
import { Login } from './pages/LoginPage';
import { Singin } from './pages/SinginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='login' element={<Login/>}/>
          <Route path='signin' element={<Singin/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
