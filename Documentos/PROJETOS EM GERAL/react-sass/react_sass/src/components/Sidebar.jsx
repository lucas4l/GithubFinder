import Avatar from '../img/'

import "../styles/components/sidebar.sass"
import InformationContainer from './InformationContainer';
import SocialNetWorks from './SocialNetWorks';



const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Miguel Nicacio" />
      <p className='title'>Desenvolvedor</p>
      <SocialNetWorks />
      <InformationContainer />
      <a href="" className='btn'>
        Download Currículo
      </a>
    </aside>
  ); 
  
}

export default Sidebar