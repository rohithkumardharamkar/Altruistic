import { useEffect, useState } from "react";

function Exam() {
    const [s, setS] = useState(0); 
    const [m, setM] = useState(0);  

    useEffect(() => {
        const interval = setInterval(() => {
            setS((prevS) => {
                if (prevS === 59) {
                    setM((prevM) => prevM + 1); 
                    return 0; 
                }
                return prevS + 1;
            });
        }, 1000);
       
        return () => clearInterval(interval);
    }, []); 
    return (
        <div className="timer">
            
            {(m<=3 && s<=59) ? <div>{m}:{s < 10 ? `0${s}` : s}</div>:<div>Exam Over</div> }
        </div>
    );
}

export default Exam;
