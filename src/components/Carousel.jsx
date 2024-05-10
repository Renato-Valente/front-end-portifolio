import './Carousel.css'

import decker from '../assets/double-decker.jpg'
import fall from '../assets/fall.jpg'
import mountains from '../assets/mountains.jpg'
import dog from '../assets/dog.jpg'
import ticTac from '../assets/tic-tac.jpg'
import toDoList from '../assets/todo-list.jpg'

import { useRef, useState } from 'react'

const Carousel = () => {

    const [images, setImages] = useState([
        {src: decker, link: 'https://google.com'},
        {src: fall, link: 'https://google.com'},
        {src: mountains, link: 'https://google.com'},
        {src: dog, link: 'https://youtube.com'},
        {src: ticTac, link: 'https://react-tic-tac-toe-a6a1.onrender.com/'},
        {src: toDoList, link: 'https://react-todo-list-uyvh.onrender.com/'}
    ])

    const [offSet, setOffSet] = useState(0);

    const handleButtonRight = () => {
        //setOffSet(offSet + 1);
        setOffSet((prev) => {
            return prev + 1 >= images.length ? 0 : prev + 1;
        })
    }

    const handleButtonLeft = () => {
        setOffSet((prev) => {
            return prev - 1 < 0 ? images.length - 1 : prev - 1;
        })
    }

    return(
        <div className="carousel-container">
            <h2>My Projects</h2>
            <div className="carousel">
                <button onClick={handleButtonLeft} className="carousel-button button-left">&larr;</button> 
                {
                    images.map((item, index) => {
                        return(
                            <a key={index} href={item.link} target='blank'>
                                <img className='carousel-image'
                                style={{left: `${(index - offSet) * 400}px`}}
                                src={item.src} />
                            </a>
                        )
                    })
                }
                <button onClick={handleButtonRight} className="carousel-button button-right">&rarr;</button>
            </div>
            
        </div>
    )
}

export default Carousel;