import React from "react";
export default function NavBar(props) {
    return (
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar{""}
            <span className="ml-2 badge badge-pill badge-secondary">{props.totalCounter}</span>
            </a>
        </nav>
    )
}