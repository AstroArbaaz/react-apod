import React from 'react';
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div className="home">
            <Link className="home-link" to="/nasa_photo">See into the Stars!</Link>
        </div>
    );
}