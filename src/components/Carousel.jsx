import './Carousel.css'

import decker from '../assets/double-decker.jpg'
import fall from '../assets/fall.jpg'
import mountains from '../assets/mountains.jpg'
import dog from '../assets/dog.jpg'
import ticTac from '../assets/tic-tac.jpg'
import toDoList from '../assets/todo-list.jpg'

import { useEffect, useRef, useState } from 'react'

const Carousel = () => {

    const [images, setImages] = useState([
        {src: decker, link: 'https://google.com'},
        {src: fall, link: 'https://google.com'},
        {src: mountains, link: 'https://google.com'},
        {src: dog, link: 'https://youtube.com'},
        {src: ticTac, link: 'https://react-tic-tac-toe-a6a1.onrender.com/'},
        {src: toDoList, link: 'https://react-todo-list-uyvh.onrender.com/'}
    ])

    const imageSizeInitialValue = window.matchMedia('(max-width: 600px)').matches ? 300 : 400;
    const [imageSize, setImageSize] = useState(imageSizeInitialValue);
    const [screen, setScreen] = useState(true);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setImageSize((prev) => {
                const match = window.matchMedia('(max-width: 600px)').matches;
                console.log('teste:', match)
                return match ? 300 : 400;
            });
        })
    },[])

    const ref = useRef();

    const [scrollOffset, setScrollOffset] = useState(0);
    const [scroll, setScroll] =useState(false);

    const [oldOffset, setOldOffset] = useState(0);
    const [xStart, setXStart] = useState(0);

    const handleMove = (event) => {
        //if(!scroll) return;
        ref.current.style.transitionDuration = '0ms'
        setScrollOffset((prev) => {
            const pageX = event.changedTouches[0].pageX;
            return prev + event.movementX > - (imageSize * (images.length - 1)) 
            && prev + event.movementX < imageSize ? 
                prev + event.movementX : prev;
        })
    }

    const handleButtonLeft = () => {
        ref.current.style.transitionDuration = '350ms';
        setScrollOffset((prev) => {
            const result = Math.floor((prev + imageSize) / imageSize) * imageSize;
            const finalResult = result < imageSize * 2 ? 
            result : prev;

            setOldOffset(finalResult);
            return finalResult
        })   
    }

    const handleButtonRight = () => {
        ref.current.style.transitionDuration = '350ms'
        setScrollOffset((prev) => {
            const result = Math.floor((prev - imageSize) / imageSize) * imageSize;
            const finalResult = result > - (imageSize * (images.length)) ? result : prev;
            setOldOffset(finalResult);
            return finalResult;
        })

    }

    const touchStart = (event) => {
        ref.current.style.transitionDuration = '0ms'
        const pageX = event.touches[0].pageX;
        console.log(pageX);
        setXStart(pageX);

    }

    const touchEnd = (event) => {
        setOldOffset(scrollOffset);
    }

    const touchMove = (event) => {
        const pageX = event.touches[0].pageX;
        setScrollOffset(oldOffset + (pageX - xStart));
    }

    return(

        <>
        <h2 className='carousel-title'>My Projects</h2>
        <div className="overall-container">

        <div  ref={ref} 
            onTouchStart={touchStart}
            onTouchEnd={touchEnd}
            onTouchMove={touchMove}
            /* onMouseDown={() => setScroll(true)}
            onMouseUp={() => setScroll(false)}
            onMouseLeave={() => setScroll(false)} */
        className="carousel-container">
            <button onClick={handleButtonLeft} className='carousel-button left-button'>&larr;</button>
            {
                images.map((item, index) => {
                    return(
                            <a href={item.link} target='blank' className='carousel-image'>
                                <img key={index} onDoubleClick={() => window.open(item.link)} style={{
                                left: `${index * imageSize + scrollOffset}px`
                            }} draggable='false' src={item.src}  />
                            </a>
                        
                    )
                })
            }
            <button onClick={handleButtonRight} className='carousel-button right-button'>&rarr;</button>
        </div>
        </div>
        </>
        
    )
}

export default Carousel;