import {NavLink} from "react-router-dom";


const Menu =()=>{
    return(<>
    <NavLink  to="/">About US</NavLink>
    <NavLink  to="/contact">Contact US</NavLink>
    {/* <a href="/">AboutUs</a>
    <a href="/contact">Contact</a> */}
    </>)
}

export default Menu;