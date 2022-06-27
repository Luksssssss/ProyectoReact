import React from "react";




function ContenRowTop(props) {
    
    fetch('/api/users')
    .then(function(repuesta){
        return repuesta.json();
    })
    .then(function(data){
        console.log(data)
    })
    
    
    return (
        <div id="content-wrapper" className="d-flex flex-column">



            <div className="container-fluid">
                
                <div className="row">
                
                
                </div>
            </div>



        </div>


        


    );
}
export default ContenRowTop;