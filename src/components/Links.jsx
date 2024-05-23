import './Links.css'
import linkedinIcon from '../assets/linkedin-icon.svg'
import githubIcon from '../assets/github-icon.svg'
import homeIcon from '../assets/home-icon.svg'

const Links = () => {

    return(
        <div id='links' className="links-container">
            <ul className="links">
                <li><a href="https://www.linkedin.com/in/renato-v-941b0b139/" target='blank'><img src={linkedinIcon} alt="" /></a></li>
                <li><a href="https://github.com/Renato-Valente/" target='blank'><img src={githubIcon} alt="" /></a></li>
                <li><a href="#home"><img src={homeIcon} alt="" /></a></li>
            </ul>
            <button onClick={() => {window.open('/src/assets/Renato_Valente_CV_final_en.pdf', '_blank')}}
            >Download my CV</button>
        </div>
    )
}

export default Links;