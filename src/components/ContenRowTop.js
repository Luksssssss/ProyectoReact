import React from "react";


import LastUserInDb from "./LastUserInDb";
import ProductList from "./ProductList";

import ContentRowMovies from './ContentRowMovies';

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
        <React.Fragment>
            {/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
                    {/*<!-- Content Row Movies-->*/}
                    <ContentRowMovies />
                    <LastUserInDb />
                    <ProductList />
                </div> 
            {/*<!--End Content Row Top-->*/}
        </React.Fragment>
    );
}
export default ContenRowTop;