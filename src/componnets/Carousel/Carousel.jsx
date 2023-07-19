import React, {Children, cloneElement, useEffect, useState} from 'react';
import style from './carousel.module.css'
import {FaChevronLeft, FaCaretRight} from "react-icons/fa";


const PAGE_WIDTH = 450
export const Carousel = ({children}) => {
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0)
    const handleLeftArrowClick = () => {
        setOffset((currentOffSet) => {
            let newOffset = currentOffSet + PAGE_WIDTH;
            return Math.min(newOffset, 0)
        })
    }
    const handleRightArrowClick = () => {


        setOffset((currentOffSet) => {
            let newOffset = currentOffSet - PAGE_WIDTH;
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
            return Math.max(newOffset, maxOffset)
        })
    }
    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`
                    }
                })
            })
        )
    }, [])
    return (
        <div className={style.mainContainer}>
            <FaChevronLeft className={style.arrow} onClick={handleLeftArrowClick}/>
            <div className={style.window}>
                <div className={style.allItemsContainer} style={{
                    transform: `translateX(${offset}px)`,
                }}>
                    {pages}
                </div>
            </div>
            <FaCaretRight className={style.arrow} onClick={handleRightArrowClick}/>
        </div>
    );
};

