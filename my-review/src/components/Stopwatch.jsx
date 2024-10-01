import { useEffect, useState } from "react";

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [running, isRunning] = useState(false);

    useEffect(() => {
        let timer;

        if (running) {
            setInterval(()=>{

                setTime(t => t + 1);

            }, 1000)
        }

        return() => clearInterval(timer);

    }, [running]);


    return (
        <>
            <h1>Stopwatch</h1>
            <h3>{ parseInt(time / 60) } : {time % 60}</h3>

            <button onClick={()=>{isRunning(true)}}>Start</button>
            <button onClick={()=>{isRunning(false)}}>Stop</button>
            <button onClick={()=>{isRunning(false); setTime(0);}}>Reset</button>
        </>
    )

}

export default Stopwatch;