import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const NavBar = () => {

    const alerta = () =>{
        Swal.fire({
        title: '¿Deseas cerrar la sesión?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Haz salido con éxito!',
            location.replace("http://localhost:5173/logout")
          )
        }
      })
    }

  return (
    <div className='boton-salir'>
       
        <button onClick={alerta}>Logout</button>

    </div>
  )
}

export default NavBar