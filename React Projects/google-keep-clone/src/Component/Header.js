import '../Style/All.css';
import img from '../Assets/image.png';


const Header = () => {
    return (<>
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src={img} width="25" height="30" className="d-inline-block align-top mr-2" alt="" />
                Keep Your Notes Here
            </a>
        </nav>
    </>)
}

export default Header;