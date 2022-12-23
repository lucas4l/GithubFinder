import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

import '../styles/components/socialNetWorks.sass'

const socialNetWorks = [
  { name: "linkedin", icon: <FaLinkedin /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> }
];



const SocialNetWorks = () => {
  return (
    <section id="social-networks">
      {socialNetWorks.map((network) => (
        <a href="" className='social-btn' 
          id={network.name} 
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
    </section> )
}

export default SocialNetWorks