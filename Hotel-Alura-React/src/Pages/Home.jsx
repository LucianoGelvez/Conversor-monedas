import React from 'react'
import menu from "../Imagenes/menu-img.png"
import logoHotel from "../Imagenes/aH-150px.png"
import login from "../Imagenes/login.png"
import Footer from '../Components/Footer'
import '../css/styles.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <section className='home'>
            <article className='home_articulo-uno'>
                <img src={menu} alt="menu" className='home_articulo-uno_imagen'/>
            </article>
            
            <article className='home_ingresar'>
                <div className='home_ingresar-columna'>
                    <img src={logoHotel} alt="" />
                    <div className='home_ingresar-columna_boton-login'>
                        <h2><Link to='/login'>LOGIN</Link></h2>
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