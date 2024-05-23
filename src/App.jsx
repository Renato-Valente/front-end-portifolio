import './App.css'
import spider from './assets/spider.jpg'
import links from './assets/links.svg'
import dog from './assets/dog.jpg'
import man from './assets/man.jpg'
import profile from './assets/profile_BW.jpeg'
import { useState } from 'react'
import Carousel from './components/Carousel'
import Links from './components/Links'


const Header = () => {

  const [dropdown, setDropdown] = useState(false);


  return(
    <>
      <div id="home"></div>
      <div className="header-container">
      <div className="header-image">
        <img src={profile}  height="50px" width="50px"/>
      </div>
      <div className="header-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#carousel">Projects</a></li>
          <li><a href="#links">My Links</a></li>
        </ul>
      </div>
      <div onClick={() => setDropdown(true)} className="header-icon">
        <img style={{display: dropdown ? 'none' : 'block'}} src={links} height={'35px'} width={'auto'} />
      </div>

      <div style={{display: dropdown ? 'block' : 'none'}} className="header-dropdown">
        <ul onClick={() => {setDropdown(false)}}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#carousel">Projects</a></li>
            <li><a href="#links">My Links</a></li>
        </ul>
      </div>

      <div onClick={() => setDropdown(false)} style={{display: dropdown ? 'block' : 'none'}} className="dropdown-back"></div>
    </div>
    </>
  )

}

const AboutMe = () => {


  return(
    
    <div className="about-container">
      <div className="left-side">
        <img src={profile} height={'50px'} width={'50px'} alt="profile image" />
      </div>
      <div className="right-side">
        <h2 id='about'>About Me</h2>
        <p>Hello, everyone! I'm Renato Valente, a front-end developer passionate about creating web applications that are as intuitive and user-friendly as possible. I specialize in HTML, CSS, JavaScript, and React, although I have experience with other languages and technologies as well. I have participated in a few web projects, which you can explore below to learn more about my professional experience.</p>
      </div>
    </div>

  )


}

function App() {

  const style = {
    width: '200px',
    height: '200px',
    backgroundColor: 'red',
    paddingTop: '80px',
    display: 'flex',
    flexDirection: 'column',
    alignItens: 'end'
  }
  return(
    <>
      <Header />
      <AboutMe />
      <Carousel />
      <Links />
    </>
  )


}

export default App
