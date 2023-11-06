import wave from "../assets/Design/waveOrange2.svg"
import facebook from "../assets/facebook blanco.png"
import instagram from "../assets/instagram blanco.png"
import whatsapp from "../assets/whatsapp blanco.png"
import { Link } from "react-router-dom"
import "../styles/Waves.css"

const FooterWave= () => {
    return (<>
        <div>
        <img src={wave} alt=""/>
        </div>
        <footer className="wave-footer">
            <br /><br /><br /><br />
            <br /><br /><br /><br />
        <div className="container">
        <div className="catalogo-titulo text-center footer-title">Contáctanos en</div>
        <br /><br /><br /><br />

        <div className="row ">
            <div className="col-md-1">
                <img src={facebook} alt="facebook" className="icon-social"/>
            </div>

            <div className="col-md-3 footer-content">
            <Link to="https://www.facebook.com/kinesiologomarkay/" className="footer-content" target="_blank"><p>/kinesiologomarkay/</p>
            </Link></div>
                
                
            <div className="col-md-1">
               <img src={instagram} alt="instagram" className="icon-social" />
                </div>
                
                <div className="col-md-3 footer-content">
                <Link to="https://www.instagram.com/kinesiologiamarkayc/" className="footer-content" target="_blank"> <p>@kinesiologiamarkayc</p></Link>
                </div>

            <div className="col-md-1">
                <img src={whatsapp} alt="whatsapp" className="icon-social"/>
            </div>
                
            <div className="col-md-3 footer-content"><Link to="https://api.whatsapp.com/send?phone=56982954572" className="footer-content" target="_blank"><p>+56982954572</p></Link></div>
        </div>
        </div>
        <br /><br /><br /><br />
            <br /><br /><br /><br />
            
            
        </footer>
        </>
    );
};

export default FooterWave;
