import React from 'react'
import { Link } from 'react-router-dom'
import logoHotel from "../Imagenes/aH-150px.png"
import buscar from "../Imagenes/icon-buscar.png"
import reservado from "../Imagenes/reservado.png"
import NavBar from '../Components/NavBar'

const MenuUsuario = () => {

    
  return (
    <>
        <NavBar/>
        <section className='menu-usuario'>
            <article className='menu-usuario_articulo-uno'>
                <img src={logoHotel} alt="" className='menu-usuario_articulo-uno_logo'/>
                <p>_____________________________</p>

                <Link to={'/registroDeReserva'} className='menu-usuario_articulo-uno_link'>
                    <img src={reservado} alt="" />
                    <h3>Registro de reservas</h3>
                </Link>

                <Link to={'/busqueda'} className='menu-usuario_articulo-uno_link'>
                    <img src={buscar} alt="" />
                    <h3>Búsqueda</h3>
                </Link>

            </article>

            <article className='menu-usuario_articulo-dos'>
                <div className='menu-usuario_titulo'>
                    <h2>Sistema de reservas Hotel Alura</h2>
                    <h2>Hoy es 12/09/2022</h2>
                </div>

                <div className='menu-usuario_texto'>
                    <h2>Bienvenido</h2>
                    <p>Sistema de reserva de hotel. Controle y administre de forma óptima y fácil el flujo de reservas y huespédes del hotel.</p>
                    <p>Esta herramienta le permitirá llevar un control completo y detallado de sus reservas y huespédes, tendrá acceso a herramientas especiales para tereas específicas como los son:</p>
                    <ul>
                        <li>Registro de Reservas y Huespédes</li>
                        <li>Edición de Reservsa y Huespédes existentes</li>
                        <li>Eliminar todo tipo de registros</li>
                    </ul>

                </div>
            </article>
        </section>
    </>
  )
}

export default MenuUsuario