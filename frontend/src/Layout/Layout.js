// import React from 'react';
// import { Link } from 'react-router-dom';

// const Layout = ({ children }) => {
//     return (
//         <div className="d-flex flex-column min-vh-100">
//             <header>
//                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//                     <div className="container-fluid">
//                         <Link className="navbar-brand" to="/">MyApp</Link>
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse" id="navbarNav">
//                             <ul className="navbar-nav ms-auto">
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/home">Home</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/register">Register</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/login">Login</Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>

//             </header>

//             <main className="flex-grow-1 container mt-4">
//                 {children}
//             </main>

//             <footer className="bg-dark text-light text-center py-3 mt-auto">
//                 <div className="container">
//                     <p className="mb-0">&copy; 2024 MyApp. All rights reserved.</p>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default Layout;

import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">MyApp</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="flex-grow-1 container mt-4">
                {children}
            </main>

            <footer className="bg-dark text-light text-center py-3 mt-auto">
                <div className="container">
                    <p className="mb-0">&copy; 2024 MyApp. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
