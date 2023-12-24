import MenuNavService from "../components/MenuNavLeft";
import Convenios from "../containers/PanelConvenioList";
import '../styles/MenuAdminContainer.css';

const MenuAdminConvenios = () => {
    return (
        <div className="menu-admninistrador-container">
            <div className="menu-admninistrador-container-left">
                <MenuNavService/>
            </div>
            <div className="menu-admninistrador-container-right">
                <Convenios/>
            </div>

        </div>
    );
}

export default MenuAdminConvenios;