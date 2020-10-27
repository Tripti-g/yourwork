import React,{useEffect} from 'react'
import useToggle from './useToggle'
export default function Toggler() {
    const [isHappy, setIsHappy] = useToggle(true);
    const [isBroken, setIsBroken] = useToggle(true);
    useEffect(() => {
        alert('cahnged happiness' + { isHappy });
        console.log("effect called")
        // return () => {
        //     cleanup
        // };
    }, [isHappy]);
    return (
        <div>
            <h1 onClick={setIsHappy}>{isHappy ? 'happy' : 'sad'}</h1>
            <h1 onClick={setIsBroken}>{isBroken ? 'broken' : 'notbroken'}</h1>
        </div>
    )
}
