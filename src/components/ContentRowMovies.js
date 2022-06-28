import React, {useState, useEffect } from 'react';
import SmallCard from './SmallCard';
















function ContentRowMovies(){
    const [totalUsuarios, setTotalUsuarios] = useState([])

    const [totalProducts, setTotalProductss] = useState([])

    const [totalCategory, setTotalCategory] = useState([])

    useEffect(() => {
        fetch("api/users")
            .then((respuestaApi) => {
                return respuestaApi.json()
            })
            .then((usuariosApi) =>{
                var totalUsuarios = usuariosApi.total
                console.log("Cant total Users " + totalUsuarios)
                setTotalUsuarios(totalUsuarios)
            }) 
        fetch("api/products")
            .then((repuestaApiProducts) => {
                return repuestaApiProducts.json()
            })
            .then((productsApi) => {
                var totalProducts = productsApi.count
                console.log("Cant total Products " + totalProducts)
                setTotalProductss(totalProducts)
                var category = productsApi.countByCategory  
                var totalCategory = category.cantidad
                console.log("Cant total categorys " + totalCategory)
                setTotalCategory(totalCategory)
            })
    })
    /*  Cada set de datos es un objeto literal */

    /* <!-- Total users --> */
    var usersInDB = {
        title: 'Total Users',
        color: 'primary', 
        cuantity: totalUsuarios,
        icon: 'fa-clipboard-list'
    }

    /* <!-- Total products --> */

var totalProductsinDB = {
    title:' Total products', 
    color:'success', 
    cuantity: totalProducts,
    icon:'fa-award'
}


/* <!-- Actors quantity --> */

var CategorysQuantity = {
    title:'Categorys quantity' ,
    color:'warning',
    cuantity: totalCategory,
    icon:'fa-user-check'
}

    var cartProps = [usersInDB, totalProductsinDB, CategorysQuantity];
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;