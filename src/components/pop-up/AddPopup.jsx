import React from 'react';
import "./pop-up.scss"
import {Link} from "react-router-dom";

const AddPopup = () => {
    return (
        <div className="add_popup">
            {/*CARD*/}
            <div className="add_popup__card">
                <div>
                    <input type="text" name="username" placeholder="Логин" />
                    <input type="email" name="email" placeholder="Почта"/>
                    <input type="text" name="text" placeholder="Текст задачи"/>
                </div>
                <div>
                    <p>status</p>
                    <button>Создать</button>
                </div>
            </div>
            {/*CROSS*/}
            <div className="add_popup__cross">
                <Link to="/">
                    <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 20 20">
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default AddPopup;