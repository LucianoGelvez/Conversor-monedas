import React from 'react'
import menu from "../Imagenes/menu-img.png"
import logoHotel from "../Imagenes/aH-150px.png"
import login from "../Imagenes/login.png"
import Footer from '../Components/Footer'
import '../css/styles.css'

const Home = () => {
  return (
    <div>
        <section className='home'>
            <article className='img-menu'>
                <img src={menu} alt="menu" />
            </article>
            
            <article className='ingresar'>
                <div className='ingresar-columna'>
                    <img src={logoHotel} alt="logo-hotel" />
                    <div className='boton-login'>
                        <h2>LOGIN</h2>
                        <img src={login} width={"80px"} alt="login" />
                    </div>
                </div>
            </article>
            
        </section>

        <Footer/>
    </div>
  )
}

export default Home