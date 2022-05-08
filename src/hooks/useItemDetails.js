import { useEffect, useState } from "react";

const useItemDetails = (ItemId, shouldRemount) => {
    const [Item, setItem] = useState({});

    useEffect(() => {
        const url = `https://protected-tor-63915.herokuapp.com/items/${ItemId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, [ItemId, shouldRemount]);
    return [Item, setItem];
}

export default useItemDetails;