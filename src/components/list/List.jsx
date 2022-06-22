import React, {useEffect, useState} from 'react';
import Item from "./Item";
import "./list.scss"
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, getTodo, toggleComplete} from "../../store/todoSlice";

const List = () => {

    const [res, setRes] = useState([])

    axios
        .get('https://uxcandy.com/~shapoval/test-task-backend/v2?developer=Name')
        .then(function (response) {
            // handle success
            setRes(response.data.message.tasks)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

    return (
        <ul>
            {
                res.map(item =>
                    <Item key={item.id} {...item}/>
                )
            }
        </ul>
    );


};

export default List;