import React, { useState } from 'react'
import ShowList from './ShowList';

const Input = () => {

    const [data, setData] = useState([]);
    
    const addItem = () => {
        console.log(document.getElementById('inputitem').value);
        // setData([...data, document.getElementById('inputitem').value]);
        let empty=document.getElementById('inputitem').value;

        if(empty!==""){
            setData([...data, empty]);
        }
        document.getElementById('inputitem').value='';
    };

    return (
        <div>
            <input type="text" id="inputitem" placeholder='Add your items' autoComplete='off'/>
            <button onClick={addItem}>➕</button>
            {/* <h2>{data}</h2> */}
            <ShowList data={data} setData={setData} />
        </div>
    )
}

export default Input;