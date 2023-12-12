import { Nav, Button, Collapse } from 'react-bootstrap';
import { useState } from 'react';

function MenuNavService() {
    const services = ['Servicio 1', 'Servicio 2', 'Servicio 3']; 
    const [open, setOpen] = useState(null);

    return (
        <Nav className="flex-column">
            {services.map((service, index) => (
                <div key={index}>
                    <Button
                        onClick={() => setOpen(open === index ? null : index)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open === index}
                    >
                        {service}
                    </Button>
                    <Collapse in={open === index}>
                        <div id="example-collapse-text">
                            <div>Subservicio1</div>
                            <div>SubServicio2</div>
                            <div>SubServicio3</div>
                        </div>
                    </Collapse>
                </div>
            ))}
        </Nav>
    );
}

export default MenuNavService;