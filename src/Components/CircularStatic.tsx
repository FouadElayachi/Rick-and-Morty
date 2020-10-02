import React from 'react';
import CircularProgressWithLabel from './CircularProgessWithLabel';

function CircularStatic() {
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return <CircularProgressWithLabel value={progress}/>;
}

export default CircularStatic;