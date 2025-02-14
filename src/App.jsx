import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="begin-container">
        <div className="banner-logo">
          <h1><a href="/"><img src="https://i.ibb.co/KVZRVhw/logov4-preto.png" alt="logo-em-obra"
            className="logo-header" /></a></h1>
        </div>


        <div className="begin-btns">
          <div className="banner-logo">
            <h3 style={{color: "white" }}>Facilitando conexões, construindo sonhos.</h3>
          </div>
          <Link to="/cadastro"><button className='botao-entrar' >Criar uma conta</button></Link>

          <Link to="/login"><button className='botao-entrar' style={{ backgroundColor: "white", color: "#FE8813" }}>Já possuo conta</button></Link>
        </div>

      </div>
      {/* <Outlet /> */}
    </>
  )
}

export default App
