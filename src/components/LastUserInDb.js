import React from "react";
import { useState, useEffect } from "react"
//import ImagenProducto from "../assets/img/product_dummy.svg";



function LastUserInDb() {
    const [ultimoUsuario, setUltimoUser] = useState([])

    useEffect(() => {
        fetch("api/users")
            .then((respuestaApi) => {
                return respuestaApi.json()
            })
            .then((usuariosApi) => {
                let users = usuariosApi.data
                console.log('data')
                console.log(users)
                let idUsuarios = Array.from(users).map((user) => {
                    return user.id

                })
                console.log('id')
                console.log(idUsuarios)
                let idMayor = Math.max(...idUsuarios)
                let ultimoUsuario = Array.from(users).find(elemento => elemento.id === idMayor)
                console.log('a')
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
                    <p>Nombre: {ultimoUsuario.first_name} </p>
                    <p>Apellido: {ultimoUsuario.last_name}</p>
                    <p>e-Mail: {ultimoUsuario.email}</p>
                </div>
            </div>
        </div>


    );
}

export default LastUserInDb;