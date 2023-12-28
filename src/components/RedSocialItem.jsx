/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const RedSocialItem = ({ redSocial }) => {
    if (!redSocial) {
        return <div>...</div>;
    }
    const imagen = `https://res.cloudinary.com/dn1gcn5rm/${redSocial.imagen}`

    return (
        <div className="col-md-4 footer-content text-center">
                <img src={imagen} alt="facebook" className="icon-social"/>
            <Link to={redSocial.enlace} className="footer-content" target="_blank"><p>{redSocial.texto}</p></Link>
        </div>
    );
};

export default RedSocialItem;
