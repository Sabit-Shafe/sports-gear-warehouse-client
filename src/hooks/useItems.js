import { useEffect, useState } from 'react';

const useItems = (shouldRemount) => {
    const [item, setItem] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data => setItem(data));
    }, [shouldRemount]);
    return [item, setItem]
}
export default useItems;