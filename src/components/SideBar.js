import React from "react";


function SideBar(){
    return(
		<div >

		<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon"></div>
						
				<div className="sidebar-brand-text mx-3">Admin</div>
			</a>

			<hr className="sidebar-divider"/>

			<li className="nav-item active">
				<a className="nav-link" href="/">
							
					<span> Dashboard</span></a>
			</li>


			<hr className="sidebar-divider"/>


			<div className="sidebar-heading">Actions</div>


			<li className="nav-item">
				<a className="nav-link collapsed" href="/">
					
					<span> Pages</span>
				</a>
			</li>


			<li className="nav-item">
				<a className="nav-link" href="/">
					
					<span> Charts</span>
				</a>
			</li>


			<li className="nav-item">
				<a className="nav-link" href="/">
					
					<span> Tables</span>
				</a>
			</li>



		</ul>
	</div>

    );
}
export default SideBar;