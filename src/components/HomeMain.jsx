import logoMarkay from '../assets/logomarkay.png'
import { Link } from 'react-router-dom';

const HomeMain= () => {
    return (
<div className="row main-home">
                    <div className="col-md-6">
                        <img src={logoMarkay} alt="" />
                    </div>
                    <div className="col-md-6">
                        <Link to="/especialistas"><button type="button" className=" btn-home">Solicita tu hora</button></Link>
                    </div>

                    
                </div>);
}

export default HomeMain;