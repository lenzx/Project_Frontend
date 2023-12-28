
// PanelSeccionList.jsx
import PropTypes from 'prop-types';
import SeccionItem from "../components/PanelSeccionItem";
import useGetSeccion from "../hooks/useGetSeccion";
import "../styles/PanelSeccionList.css";

const PanelSeccionList = ({ setSelectedForm, setSelectedObject }) => {
    const { seccion, isLoading, error } = useGetSeccion({ id: null });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading section: {error.message}</div>;
    }

    return (
        <div className="panel-seccion-list-container">
            
            {seccion.map(seccionObject => (
                <SeccionItem
                key={seccionObject.id}
                seccion = {seccionObject}
                setSelectedForm={setSelectedForm}
                setSelectedObject={setSelectedObject}
                />
            ))}

        </div>
    );
};

PanelSeccionList.propTypes = {
    setSelectedObject: PropTypes.func.isRequired,
    setSelectedForm: PropTypes.func.isRequired
};

export default PanelSeccionList;
