import '../styles/Home.css';
import logoMarkay from '../assets/logomarkay.png'
import FooterWave from '../components/FooterWave';
import { Link } from 'react-router-dom';
const Home = () => {
    return (<>

            <div className="container">
                <div className="row main-home">
                    <div className="col-md-6">
                        <img src={logoMarkay} alt="" />
                    </div>
                    <div className="col-md-6">
                    <Link to="/especialistas"><button type="button" className=" btn-home">Solicita Tu atención</button></Link>

                    </div>

                    
                </div>
            </div>
            <FooterWave/>
        </>
    );
}

export default Home;