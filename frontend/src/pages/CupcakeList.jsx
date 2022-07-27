import Cupcake from "@components/Cupcake";
import axios from "axios";
import {useState, useEffect} from "react";

export default function CupcakeList() {
  // Step 1: get all cupcakes
  const [cakes, setCakes] = useState("");
  const [accessories, setAccessories] = useState("");
  const [value, setValue] = useState("");
  const [allCupcakes, setAllCupcakes] = useState(true)

  useEffect(() => {
    axios
        .get(`http://www.localhost:4000/cupcakes`)
        .then(response => response.data)
        .then(data => setCakes(data))
  }, [])

  // Step 3: get all accessories

    useEffect(() => {
      axios
          .get(`http://localhost:4000/accessories`)
          .then(response => response.data)
          .then(data => setAccessories(data))
    },[])

    function handleChange(e){
      setValue(e.target.value) 
    }


    
  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select id="cupcake-select" value={value} onChange={handleChange}>
          <option></option>
            {accessories && accessories.map((accessorie) => (
                <option value={accessorie.id} key={accessorie.id}>{accessorie.name}</option>
            ))}
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {cakes && cakes.filter((cupcake) => value === "" || value == cupcake.accessory_id
        ).map((cupcake) => (
          <li className="cupcake-item" key={cupcake.id}>
            <Cupcake cupcake={cupcake}/>
          </li>
        ))}      
        {/* end of block */}
      </ul>
    </>
  );
}
