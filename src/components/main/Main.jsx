import React from 'react';
import "./main.scss"
import List from "../list/List";

const Main = () => {
    return (
        <main className="main">
            <div className="main__card">
                <p>Задачи</p>
                <List/>
            </div>
        </main>
    );
};

export default Main;