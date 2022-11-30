import '../Style/All.css';

const Footer = () => {

    const setTime = new Date().getFullYear();

return (<>
        <div className="footer">
            Copyright ©️ {setTime}
        </div>
    </>)
}

export default Footer;