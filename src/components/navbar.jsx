import React from 'react'

function Navbar({ totalValue }) {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <h1 className="navbar-band">Navbar <span className="badge badge-info">{ totalValue }
                </span></h1>
            </nav>
        </div>
    )
}

export default Navbar
