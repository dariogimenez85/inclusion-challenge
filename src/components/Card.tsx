import axios from "axios";
import { useEffect } from "react";

const Card = (props: any) => {

    useEffect(() => {
        
    }, [])

    return (
        <div>{props.data.name}</div>
    );

}

export default Card;