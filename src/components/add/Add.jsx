import React from 'react';
import "./add.scss"
import {Link} from "react-router-dom";

const Add = () => {
    return (
        <Link to="/create">
            <div className="add">
                <svg fill="#2e497e" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
            </div>
        </Link>
    );
};

export default Add;