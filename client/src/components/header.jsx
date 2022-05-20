import React from "react";
import NavBar from "./navBar";

const Header = ({categories}) => {
    return (
        <>
            <NavBar categories={categories}/>
        </>
    );
}
 
export default Header;