import React from "react";
import { useState, useEffect } from "react"
//import ImagenProducto from "../assets/img/product_dummy.svg";



function LastUserInDb() {
    const [ultimoUsuario, setUltimoUser] = useState([])

    useEffect(() => {
        fetch('/api/users')
            .then((respuestaApi) => {
                return respuestaApi.json()
            })
            .then((usuariosApi) => {
                //console.log(usuariosApi)
                //const users = usuariosApi.users
                //console.log('a')
               // console.log(users)
                let idUsuarios = usuariosApi.map((users) => {
                    console.log(idUsuarios)
                    return users.id

                })
                let idMayor = Math.max(...idUsuarios)
                let ultimoUsuario = usuariosApi.find(elemento => elemento.id === idMayor)
                console.log(ultimoUsuario);
                setUltimoUser(ultimoUsuario)
            })
    }, [])

    return (
        <div className="col-lg-6 mb-4 ">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Ultimo Usuario Creado en la DB</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        
                    </div>
                    <p></p>
                    <p>Nombre: {ultimoUsuario.nombre} </p>
                    <p>Apellido: {ultimoUsuario.apellido}</p>
                    <p>e-Mail: {ultimoUsuario.email}</p>
                </div>
            </div>
        </div>


    );
}

export default LastUserInDb;