import {useParams, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Cupcake from "@components/Cupcake";

function CupcakeDetails(){
    const [details, setDetails] = useState("")
    const {id} = useParams()

    useEffect(() => (
        axios
            .get(`http://localhost:4000/cupcakes/${id}`)
            .then(response => response.data)
            .then(data => setDetails(data))
    ), [])

    return(
        <>
        <ul className="cupcake-list" id="cupcake-list">
          <li className="cupcake-item">
            <Cupcake cupcake={details}/>
          </li>
        </ul>
            
            <Link to="/cupcakes"><button>Retour</button></Link>
        </>
       
                
            
       
    )
}



export default CupcakeDetails;