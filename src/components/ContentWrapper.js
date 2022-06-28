import React from "react";
import TopBar from "./TopBar";
import ContenRowTop from "./ContenRowTop";
import Footer from "./Footer";




function ContentWrapper(){
    return(
        <React.Fragment>
        {/*<!-- Content Wrapper -->*/}
		<div id="content-wrapper" className="d-flex flex-column">
            {/*<!-- Main Content -->*/}
			<div id="content">
                <TopBar/>
                <ContenRowTop/>
                <Footer/>                   
            </div>
        </div>
        </React.Fragment>
    );
}
export default ContentWrapper