import React from "react";




function ContenRowTop(props) {
    
    fetch('http://localhost:3050/api/users', {mode:'no-cors'})
    .then(function(repuesta){
        return repuesta.json();
    })
    .then (function(data){
        console.log(data)
    })

    
    return (
        <div id="content-wrapper" className="d-flex flex-column">



            <div className="container-fluid">
                
                <div className="row">
                    
                asd
                </div>
            </div>



        </div>


        


    );
}
export default ContenRowTop;