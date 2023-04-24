import React from 'react'
import hotel from "../Imagenes/img-hotel-login-.png"
import logoHotel from "../Imagenes/aH-150px.png"
import { Link } from 'react-router-dom'
const IniciarSesion = () => {

    const handleSubmit = () =>{
        console.log("hola");
    }

  return (
    <section className='iniciar-sesion'>
        <article className='iniciar-sesion_articulo-uno'>
            <form className="form" onSubmit={handleSubmit}>
                <img src={logoHotel} width={"70px"} alt="" />
                <h2>INICIAR SESION</h2>
                <label>USUARIO</label>
                <input type="text" placeholder='Ingrese su usuario'/>
                <label>CONTRASEÑA</label>
                <input type="text" placeholder='Ingrese su contraseña'/>
                <Link to={"/menu-usuario"}><button>ENVIAR</button></Link>
            </form>
        </article>

        <article className='iniciar-sesion_articulo-dos'>
            <img src={hotel} border={"2px green solid"} alt="" />
        </article>
    </section>
  )
}

export default IniciarSesion