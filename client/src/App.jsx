import { Login } from './containers/Login'
import { Signin } from './containers/Signin'
import { Home } from './containers/Home'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/registration" element={<Signin/>} />
          <Route path="/home" element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
