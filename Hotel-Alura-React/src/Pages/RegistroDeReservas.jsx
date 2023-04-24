import React from 'react'
import reserva from "../Imagenes/reservas-img-3.png"
import logoHotel from "../Imagenes/aH-150px.png"
import NavBar from '../Components/NavBar'

const RegistroDeReservas = () => {
  return (
    <>
    <NavBar/>
    <section className='reservas'>
        <article className="reservas_art1">
          <h3>SISTEMA DE RESERVAS</h3>
        <form className='reservas_art1_form'>
            <label > FECHA DE CHECK IN</label>
            <input type="date" />
            <label >FECHA DE CHECK OUT</label>
            <input type="date" />
             <label >VALOR DE LA RESERVA</label>
            <input type="number" placeholder='$' />
            <label>FORMA DE PAGO</label>
            <select name="" id="">
                <option>tarjeta de credito</option>
                <option>efectivo</option>
            </select>
            <div className='reservas_art1_form_button'>
            <button>SIGUIENTE</button>
            </div>
            </form>
            </article>
            <article className='reservas_art2'>
            <img className='reservas_art2_logo' src={logoHotel} alt="logo"/>
            <img src={reserva} alt="calendario"  width={"62%"}/>
            </article>
            </section>
            </>
  )
}

export default RegistroDeReservas