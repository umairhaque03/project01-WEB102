import React from "react";
const Event = (props) => {
    return (
<td className={props.resturaunt + props.type}>

    <h2>{props.resturaunt}</h2>
    <h3 >{props.type}</h3>

</td>



    )

}
export default Event;
