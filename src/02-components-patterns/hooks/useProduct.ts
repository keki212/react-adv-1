import { useState } from 'react';

export const useProduct = (count:  number = 0) => {

    const [counter, setCounter] = useState(count);

    const increaseBy = (value: number) => {
        setCounter(prev => Math.max(prev + value, 0));
    }
    return {
        counter,
        increaseBy,
    }
}