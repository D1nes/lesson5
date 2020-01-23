import React, {useState} from 'react'
import './Shop.css'
import {Link} from "react-router-dom";
import {Header} from "../Header";
const Shop = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <Header/>
            <hr />
        <div style={{textAlign: "center"}}>
            Welcome to Shop<br/>
            <button onClick={() => setIsModalOpen(true)}>Purchase</button>

            {isModalOpen && (
                <div className="overlay">
                    <div className="modal">
                        <p>There is no products now </p>
                        <Link to="/"><button onClick={() => setIsModalOpen(false)}>Ok</button></Link>
                    </div>
                </div>
            )}
        </div>
            </>
    )
}

export default Shop
