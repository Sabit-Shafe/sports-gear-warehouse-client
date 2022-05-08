import { useEffect, useState } from "react";

const useItemDetails = (ItemId, shouldRemount) => {
    const [Item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/items/${ItemId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, [ItemId, shouldRemount]);
    return [Item, setItem];
}

export default useItemDetails;