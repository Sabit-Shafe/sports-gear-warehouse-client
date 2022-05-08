import { useEffect, useState } from 'react';

const useItems = (shouldRemount) => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch('https://protected-tor-63915.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItem(data));
    }, [shouldRemount]);
    return [item, setItem]
}
export default useItems;