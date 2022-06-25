import React from "react";





function TopBar(props){
    return (
        
        <div className="container-fluid">
        
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

					
					<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
					<i className="fa fa-bars"></i>
						
					</button>

					
					<ul className="navbar-nav ml-auto">

						
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" style={{fontSize: 20}} href="/" id="alertsDropdown">
								
								<span className="badge badge-danger badge-counter">3+</span>
							</a>
						</li>

						
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" style={{fontSize: 20}} href="/" id="messagesDropdown">
								
								<span className="badge badge-danger badge-counter">7</span>
							</a>
						</li>

						<div className="topbar-divider d-none d-sm-block"></div>

						
						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-gray-600 small">enRedArte</span>
								
							</a>
						</li>

					</ul>

				</nav>
                </div>	
                
    );
}
export default TopBar