import React from 'react'

const ShowList = (props) => {

    const deleteItem = (event) => {
        console.log(event.target.id);
        console.log(props.data.indexOf(event.target.id));
        props.data.splice(props.data.indexOf(event.target.id));
        props.setData([...props.data]);
    };

    return (
        <div>
            <ul style={{listStyleType:"none"}}>
                {props.data.map((element) => <li><button onClick={deleteItem} id={props.data.indexOf(element)}>✖️</button>{element}
                </li>)}
            </ul>
        </div>
    )
}

export default ShowList;