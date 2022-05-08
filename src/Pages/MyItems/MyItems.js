import React from 'react';
import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
// import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [Items, setItems] = useState([]);
    const navigate = useNavigate();
    const [shouldRemount, setShouldRemount] = useState(false)
    // const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const email = user.email;
            const url = `https://protected-tor-63915.herokuapp.com/items?email=${email}`;
            // console.log(url);
            try {
                const response = await fetch(url)
                if (response.status === 200) {
                    let data = await response.json();
                    setItems(data);
                }
                //  else {
                //     throw 'Error fetching users list'
                // }
                // .then(res => res.json())
                // .then(data => setItems(data));
            } catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
                // setIsError(true)
            }
        }
        fetchData();


    }, [user, shouldRemount, navigate]);
    return (
        <div className="container">
            <h1 className="text-center text-primary">My items</h1>
            <div className="row">
                {Items.map(Items => <MyItem
                    key={Items._id}
                    items={Items}
                    shouldRemount={shouldRemount}
                    setShouldRemount={setShouldRemount}
                ></MyItem>)}

            </div>
        </div>
    );
};

export default MyItems;