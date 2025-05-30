import "./Layout.scss"

import { Outlet } from "react-router-dom";
import { useState } from "react";
import Nav from "../../components/Nav/Nav.jsx";

const Layout = () => {
    const [currentPage, setCurrentPage] = useState('');
    return (
        <>  
            {/* Sticky nav bar? */}
            <Nav currentPage={currentPage} />

            <Outlet context={setCurrentPage}/>

            {/* add footer here? */}
        </>
    )
}

export default Layout;