import React from "react";
import {Link} from "react-router-dom";

const List = ({text, id}) => (
    <>

        <Link to={{
            pathname: "/review",
            search: `?id=${id}`,
        }}>
            {text}
        </Link>
        <br/>
    </>
)

export default List
