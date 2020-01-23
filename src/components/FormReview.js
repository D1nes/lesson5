import React, {useState} from "react";

const FormReview = ({ onAdd}) => {
    const [review, setreview] = useState('')

    const change = event => setreview(event.target.value)

    const submit = event => {
        event.preventDefault()
        onAdd(review)
    }

    return (
        <form onSubmit={submit}>
            <input onChange={change} />
        </form>
    )

}

export default FormReview
