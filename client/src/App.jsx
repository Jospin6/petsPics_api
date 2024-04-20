import { Login } from './containers/Login'
import { Signin } from './containers/Signin'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/registration" element={<Signin/>} />
      </Routes>
    </>
  )
}

export default App
