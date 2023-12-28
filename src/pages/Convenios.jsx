import ConvenioList from '../containers/ConvenioList';
import FooterWave from '../containers/FooterWave';
import '../styles/Convenios.css';
import SeccionList from '../containers/SeccionList.jsx';

const Convenios = () => {
    return (
        <>
            <div className="convenio-container container">
                <SeccionList idSeccion={3} />
                <ConvenioList />
            </div>
            <FooterWave />
        </>
    );
}

export default Convenios;