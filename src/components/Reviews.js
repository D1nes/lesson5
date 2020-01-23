import React, {useEffect, useState} from "react";
import uuid from 'uuid/v4'
import List from './List'
import FormReview from "./FormReview";
import {Header} from "../Header";

const Reviews = () => {
    const listFromStorage = localStorage.getItem("listReviews")
    const stringifyList = JSON.parse(listFromStorage)
    const [listReviews, setListReviews] = useState(stringifyList || [])

    const onAdd = text => setListReviews([
        ...listReviews,
            {
                id: uuid(),
                text,
            }
    ])

    useEffect(() => localStorage.setItem('listReviews', JSON.stringify(listReviews)),
        [listReviews])

    return (
        <>
            <Header/>
            <hr />
        <div style={{textAlign: 'center'}}>
            <FormReview onAdd={onAdd}/>
            {listReviews.map(
                (data, index) => <List key={index} text={data.text} id={data.id} />
            )
            }

        </div>
        </>
    )
}


export default Reviews
