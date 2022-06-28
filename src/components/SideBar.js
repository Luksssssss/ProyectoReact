import React from "react";


function SideBar(){
    return(
		<React.Fragment> 
			<div >

			<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
				<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
					<div className="sidebar-brand-icon"></div>
							
					<div className="sidebar-brand-text mx-3">Admin</div>
				</a>
				{/*<!-- Divider -->*/}
				<hr className="sidebar-divider"/>
				<li className="nav-item active">
					<a className="nav-link" href="/">
						<span> Dashboard</span></a>
				</li>
			</ul>
		</div>
		 {/*<!-- End of Sidebar -->*/}
	</React.Fragment>
    );
}
export default SideBar;