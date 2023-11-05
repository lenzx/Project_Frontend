import Producto from "../components/CatalogoItem.jsx"
import ProductoExpanded from "../components/CatalogoItemExpanded.jsx"
import doctor from "../assets/Especialistas/doctor.webp"
import whatsapp from "../assets/logo-ws.png"
//que grande copilot los veooooooooooo silencio 
//YAPO LEOOOOOOO Y el png???????????? 

const ProductoList = () => {  
    return (
        <div className="row">
            <div className="col-md-6">
                <Producto 
                imagen = {doctor} 
                nombre="Bota ortpédica"
                precio="2000"
                descripcion="Bota ortopédica para lesiones"
                />
            </div>
            <div className="col-md-6">
                <Producto 
                imagen = {doctor} 
                nombre = "Rodillera ortopédica"
                precio="2000"
                descripcion="Rodillera ortopédica para lesiones"/>
            </div>
            <ProductoExpanded
            imagen = {doctor} 
            nombre = "Rodillera ortopédica"
            precio="2000"
            descripcion="Rodillera ortopédica para lesiones"
            imagenWhatsapp={whatsapp}
            imagenCodigoQr={whatsapp}
            telefono="+56982954572"/>
        </div>

    );
}

export default ProductoList;