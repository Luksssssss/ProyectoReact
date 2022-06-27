import React from "react";


import LastUserInDb from "./LastUserInDb";
import ProductList from "./ProductList";

function ContenRowTop(props) {
    /*
    fetch('/api/users')
    .then(function(repuesta){
        return repuesta.json();
    })
    .then(function(data){
        console.log(data)
    })
    */
    
    return (
        <div id="content-wrapper" className="d-flex flex-column">



            <div className="container-fluid">
                
                <div className="row">
                <LastUserInDb />
                <ProductList />
                </div>
            </div>



        </div>


        


    );
}
export default ContenRowTop;