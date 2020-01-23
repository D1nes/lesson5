import  React from 'react'
import { useLocation, Link } from 'react-router-dom'

const ReviewPage = () => {
    const listFromStorage = localStorage.getItem("listReviews")
    const parseList = JSON.parse(listFromStorage)
    const { search } = useLocation()
    const id = new URLSearchParams(search).get('id')

    const foundText = parseList.find(element => element.id === id);

    return (

        <div>
            {foundText.text}<br/>
            <Link to="/reviews"><button>back</button></Link>
        </div>
    )
}

export default ReviewPage
