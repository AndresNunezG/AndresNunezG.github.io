import { useState, useEffect } from 'react';

const useTypeEffect = (text, speed, reset = null) => {
    const [textEffect, setTextEffect] = useState('');
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            if (counter < text.length) {
                setCounter(counter => counter + 1);
                setTextEffect(textEffect + text.charAt(counter))
            }
        }, speed);
    }, [textEffect]); // eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        setTextEffect('');
        setCounter(0);
    }, [reset]);
    return (textEffect);
};

export default useTypeEffect;