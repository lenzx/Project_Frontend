import '../styles/Home.css';
import FooterWave from '../containers/FooterWave';
import HomeMain from '../components/HomeMain';
import PaginaPrincipalList from '../containers/PaginaPrincipalList'

const Home = () => {
    return (<>

            <div className="container">

                <HomeMain/>
                <PaginaPrincipalList/>

            </div>
            <FooterWave/>

        </>
    );
}

export default Home;