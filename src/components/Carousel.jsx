import './Carousel.css'

import ticTac from '../assets/tic-tac.jpg'
import toDoList from '../assets/todo-list.jpg'
import calculator from '../assets/calculator.png'

import { useEffect, useRef, useState } from 'react'

const Carousel = () => {

    const [images, setImages] = useState([
        {src: calculator, link: 'https://react-calculator-gheb.onrender.com/', title: 'Calculator', repo: 'https://github.com/Renato-Valente/react-calculator.git'},
        {src: ticTac, link: 'https://react-tic-tac-toe-a6a1.onrender.com/', title: 'Tic Tac Toe Game', repo: 'https://github.com/Renato-Valente/react-tic-tac-toe'},
        {src: toDoList, link: 'https://react-todo-list-uyvh.onrender.com/', title: 'TODO List', repo: 'https://github.com/Renato-Valente/react-todo-list'}
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

    const movement = useRef(0);
    const lastPageX = useRef(0);
    const isScrolling = useRef(false);
    const movDirection = useRef(1);
    const momentumOffSet = useRef(0);
    const lastTime = useRef(0);

    const handleButtonLeft = () => {
        ref.current.style.transitionDuration = '350ms';
        setScrollOffset((prev) => {
            const result = Math.floor((prev + imageSize) / imageSize) * imageSize;
            const finalResult = result < imageSize * 3 ? 
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
        isScrolling.current = false;
        setOldOffset(momentumOffSet.current);
        ref.current.style.transitionDuration = '0ms'
        const pageX = event.touches[0].pageX;
        //console.log(pageX);
        setXStart(pageX);

    }

    const touchEnd = (event) => {
        movDirection.current = movement.current < 0 ? -1 : 1;
        movement.current = Math.abs(movement.current);
        if(movement.current > 0) {isScrolling.current = true;}
        setOldOffset(momentumOffSet.current);
        momentumScroll();
    }

    const touchMove = (event) => {
        const pageX = event.touches[0].pageX;
        movement.current = pageX - lastPageX.current;
        lastPageX.current = pageX;

        const result = oldOffset + (pageX - xStart);

        /* console.log('oldoffset: ', oldOffset);
        console.log('pageX: ', pageX);
        console.log('Xtart: ', xStart); */
        setScrollOffset((prev) => {
            if(result > 0) {
                momentumOffSet.current = 0;
                return 0;
            }

            if(result < (images.length - 1) * imageSize * -1) {
                momentumOffSet.current = (images.length - 1) * imageSize * -1;
                return (images.length - 1) * imageSize * -1;
            }

            momentumOffSet.current = result;
            return result;
        });
    }

    const momentumScroll = () => {

        if(movement.current < 1) {
            isScrolling.current = false;
            setOldOffset(momentumOffSet.current);
            return;
        }
        const deltaTime = Date.now() - lastTime.current;
        movement.current = movement.current - 0.2;// * deltaTime / 1000;
        setScrollOffset((prev) => {
            const result = prev + (movement.current * movDirection.current);

            if(result > 0) {
                momentumOffSet.current = 0;
                return 0;
            }

            if(result < (images.length - 1) * imageSize * -1) {
                momentumOffSet.current = (images.length - 1) * imageSize * -1;
                return (images.length - 1) * imageSize * -1;
            }

            momentumOffSet.current = result;
            return result;
        })
        
        lastTime.current = Date.now();

        requestAnimationFrame(momentumScroll);
    }

    return(

        <>
        <h2 id='carousel' style={{scrollBehavior: 'smooth'}} className='carousel-title'>My Projects</h2>
        <div className="overall-container">

        <div ref={ref} 
            onTouchStart={touchStart}
            onTouchEnd={touchEnd}
            onTouchMove={touchMove}
        className="carousel-container">
            <button onClick={handleButtonLeft} className='carousel-button left-button'>&larr;</button>
            {
                images.map((item, index) => {
                    return(
                            <div style={{
                                left: `${index * imageSize + scrollOffset}px`
                            }} key={index} className="carousel-image">
                                <div className="card-title">
                                    <h3>{item.title}</h3>
                                </div>
                                <img onDoubleClick={() => window.open(item.link)} 
                                 draggable='false' src={item.src}  />
                                 <div className="card-buttons">
                                    <button onClick={() => {
                                        console.log(`go to ${item.link}`);
                                        window.open(item.link, '_blank')
                                    }}>See More</button>
                                    <button onClick={() => {
                                        window.open(item.repo, '_blank');
                                    }}>See Repository</button>
                                 </div>
                            </div>
                        
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