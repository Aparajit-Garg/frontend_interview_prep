import React, { useState, useEffect } from 'react';

const SECONDS = 1000;
const MINUTES = 60 * SECONDS;
const HOUR = 60 * MINUTES;
const DAYS = 24 * HOUR;


const Timer = ({ duration }) => {
    const [timer, setTimer] = useState(duration)
    // const toShow = getFormattedTime(timer);

    const getFormattedTime = (time) => {
        const day = Math.floor(time / DAYS);
        const hour = Math.floor((time % DAYS) / HOUR); // hours left after removing days
        const minutes = Math.floor((time % HOUR) / MINUTES); // minutes left after removing hours
        const seconds = Math.floor((time % MINUTES) / SECONDS); // seconds left after removing minutes
    
        return (
          <div>
            {day < 10 ? `0${day}` : day} : {hour < 10 ? `0${hour}` : hour} :{" "}
            {minutes < 10 ? `0${minutes}` : minutes} :{" "}
            {seconds < 10 ? `0${seconds}` : seconds}
          </div>
        );
    };


    useEffect(() => {
        let timerId;   
        if (timer > 0) {
            // timerId = setTimeout(() => {
            //     setTimer(prev => prev - 1000)
            // }, 1000);
            timerId = setInterval(() => {
                setTimer(prev => prev - 1000);
            }, 1000)
        }

        if (timer === 0){
            // clearTimeout(timerId)
            clearInterval(timerId)
        }

        return () => {
            // clearTimeout(timerId);
            clearInterval(timerId)
        }
    }, [timer])

    return getFormattedTime(timer)

    // return (
    //     <div> 
    //         <span> {toShow} </span>
    //         { timer === 0 ? <button onClick={() => setTimer(20000)}> Reset </button> : <></>}
    //     </div>
    // );
}

export default Timer;