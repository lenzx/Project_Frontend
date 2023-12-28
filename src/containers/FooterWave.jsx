import wave from "../assets/Design/waveOrange2.svg"
import useGetRedSocial from "../hooks/useGetRedSocial"
import RedSocialItem from "../components/RedSocialItem"
import "../styles/Waves.css"

const FooterWave= () => {
    const redesSociales = useGetRedSocial({});

  return (<>
      
    <img src={wave} alt="" className="wave-image"/>
    <footer className="wave-footer">
    <div className="text-center footer-title">Contáctanos en</div>
    <div className="container">
      <div className="row">
          {redesSociales.map(redSocial => (
              <RedSocialItem
              redSocial = {redSocial}
              key = {redSocial.id}
          
              />
          ))}
              
      </div>
      </div>
      </footer>
      </>
      
  );

    
    
};

export default FooterWave;
