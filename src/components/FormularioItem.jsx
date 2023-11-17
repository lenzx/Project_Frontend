// eslint-disable-next-line react/prop-types
const Formulario = () => {
    return (
        <div className="row mt-3">
            <form>
                <div className="mb-3">
                    <label className="form-label text-consulta">Nombre Completo:</label>
                    <input type="text" id="nombreCompleto" className="form-control ingreso-consulta" />
                    </div>
    
                    <div className="mb-3">
                    <label className="form-label text-consulta">Número de Teléfono:</label>
                    <input type="tel" id="telefono" className="form-control ingreso-consulta " value="+56 9 " />
                    </div>
    
                    <div className="mb-3">
                    <label className="form-label text-consulta">Petición de Consulta:</label>
                    <textarea id="consulta" className="form-control ingreso-consulta"></textarea>
                    </div>
    
                    <div className="mb-3 d-grid">
                    <button type="button" className="btn btn-primary">Enviar Consulta</button>
                </div>
            </form>
        </div>
    );
  };
  
  export default Formulario;
  