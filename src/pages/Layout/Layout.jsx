import "./Layout.scss"

import { Outlet } from "react-router-dom";
import { useState } from "react";
import Nav from "../../components/Nav/Nav.jsx";

const Layout = ({page}) => {
    const [currentPage, setCurrentPage] = useState('');
    return (
        <>  
            <Nav currentPage={currentPage} />

            <Outlet context={setCurrentPage}/>

            {/* add footer here? */}
        </>
    )
}

export default Layout;