import { useState } from "react";
import { useDispatch } from 'react-redux'
import { Remove, Add } from "../action";
const Sinhvien = (props) => {
    const sv = props.sinhvien;
    const styles = {
        display: 'none'
    }
    const [classes, setclasses] = useState([]);
    const [action, setaction] = useState([])
    const action_toggle = () => {
        if (classes.length === 0) {
            setclasses("action")
        } else {
            setclasses('');
        }
    }
    const dispatch = useDispatch();
    const removeSV = () => {
        dispatch(Remove(sv.id));
    }
    const updateform = () => {
        props.edit(sv);

    }
    return (

        <
        tr >
        <
        th > { sv.id } < /th> <
        th > { sv.name } < /th> <
        th > { sv.age } < /th> <
        th > { sv.Email } < /th> <
        th >
        <
        i className = "fa fa-ellipsis-h"
        onClick = { action_toggle } > < /i>   <
        div className = { classes }
        style = { styles } >
        <
        div onClick = {
            () => removeSV() } > < i className = "fa fa-trash"
        aria_hidden = "true" > < /i>  Remove</div >
        <
        div onClick = { updateform } > < i className = "fa fa-wrench"
        aria_hidden = "true" > < /i>  Edit</div >
        <
        /div>           <
        /th> <
        /tr>
    )
}
export default Sinhvien;