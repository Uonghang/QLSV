import { useState } from "react";
import { useSelector } from "react-redux"
import Sinhvien from "./Sinhvien";
import { useDispatch } from "react-redux";
import { Add } from "../action";
import { Update } from "../action";
const ListSv = () => {
        const [id, setid] = useState();
        const [name, setname] = useState();
        const [age, setage] = useState();
        const [email, setemail] = useState();
        const [idedit, setidedit] = useState();
        const [nameedit, setnameedit] = useState();
        const [ageedit, setageedit] = useState();
        const [emailedit, setemailedit] = useState();
        const [HiddenEdit, setEdit] = useState();
        const [cover, setcover] = useState('cover');
        const addsinhvien = {
            id: id,
            name: name,
            age: age,
            Email: email
        };
        const updatesinhvien = { id: idedit, name: nameedit, age: ageedit, Email: emailedit };
        const dispach = useDispatch();
        const listsv = useSelector((state) => state.sv);
        //Su kien Them SV
        const HandlerAdd = (e) => {
            e.preventDefault()
            dispach(Add(addsinhvien));
            console.log(addsinhvien);
        }
        const Edit = (data) => {
            if (data !== null) {
                setEdit(pre => pre = "edit");
                setcover(pre => pre = 'cover active')
                setidedit(data.id);
                setnameedit(data.name);
                setageedit(data.age);
                setemailedit(data.Email);

            }
        }
        const hiddenToggle = () => {
                setEdit(pre => pre = "");
                setcover(pre => pre = 'cover');
            }
            //Su kien Update SV
        const UpdateSV = (e) => {
            e.preventDefault();
            dispach(Update(updatesinhvien));
            console.log(updatesinhvien);
        }

        const dssv = listsv.map((sv, index) =>
            <
            Sinhvien key = { index }
            sinhvien = { sv }
            edit = { Edit } > < /Sinhvien>)
            return ( <
                div className = "row" >
                <
                h1 style = {
                    { padding: '50px 0px' } } > Quan ly Sinh Vien < /h1> <
                div className = "col-12" >
                <
                div className = "card" >
                <
                div className = "card-body" >
                <
                h4 className = "header-title" > Danh sach Sinh vien < /h4>

                <
                div className = "table-responsive mt-3" >
                <
                table className = "table table-hover table-centered mb-0" >
                <
                thead >
                <
                tr >
                <
                th > ID Sinhvien < /th> <
                th > Name < /th> <
                th > Age < /th> <
                th > Email < /th> <
                th > Action < /th> <
                /tr> { dssv } <
                /thead> <
                /table>

                <
                /div> <
                /div> <
                /div> <
                /div> <
                div className = "col-6" >
                <
                form onSubmit = { HandlerAdd } >
                <
                div className = "form-group" >
                <
                label htmlFor = "exampleInputPassword1" > ID < /label> <
                input type = "text"
                className = "form-control"
                id = "exampleInputPassword1"
                placeholder = "ID"
                value = { id }
                onChange = {
                    (e) => setid(pre => pre = e.target.value) }
                /> <
                /div> <
                div className = "form-group" >
                <
                label htmlFor = "exampleInputPassword1" > Name < /label> <
                input type = "text"
                className = "form-control"
                id = "exampleInputPassword1"
                placeholder = "Name"
                value = { name }
                onChange = {
                    (e) => setname(pre => pre = e.target.value) }
                /> <
                /div> <
                div className = "form-group" >
                <
                label htmlFor = "exampleInputPassword1" > Age < /label> <
                input type = "number"
                className = "form-control"
                id = "exampleInputPassword1"
                placeholder = "Age"
                value = { age }
                onChange = {
                    (e) => setage(pre => pre = e.target.value) }
                /> <
                /div> <
                div className = "form-group" >
                <
                label htmlFor = "exampleInputEmail1" > Email < /label> <
                input type = "email"
                className = "form-control"
                id = "exampleInputEmail1"
                placeholder = "Email"
                value = { email }
                onChange = {
                    (e) => setemail(pre => pre = e.target.value) }
                /> <
                small id = "emailHelp"
                className = "form-text text-muted" > We 'll never share your email with anyone else.</small> <
                /div>

                <
                button type = "submit"
                className = "btn btn-primary" > Add < /button> <
                /form>    <
                /div> <
                div className = { cover }
                onClick = { hiddenToggle } > < /div> <
                div className = "col-6" >
                <
                form onSubmit = { UpdateSV }
                className = { HiddenEdit }
                style = {
                    { display: 'none' } } >
                <
                div className = "form-group" >
                <
                label htmlFor = "exampleInputPassword1" > ID < /label> <
                input type = "text"
                className = "form-control"
                id = "exampleInputPassword1"
                placeholder = "ID"
                value = { idedit }
                readOnly / >
                <
                /div> <
                div className = "form-group" >
                <
                label htmlFor = "exampleInputPassword1" > Name < /label> <
                input type = "text"
                className = "form-control"
                id = "exampleInputPassword1"
                placeholder = "Name"
                value = { nameedit }
                onChange = {
                    (e) => setnameedit(pre => pre = e.target.value) }
                /> <
                /div> <
                div className = "form-group" >
                <
                label htmlFor = "exampleInputPassword1" > Age < /label> <
                input type = "number"
                className = "form-control"
                id = "exampleInputPassword1"
                placeholder = "Age"
                value = { ageedit }
                onChange = {
                    (e) => setageedit(pre => pre = e.target.value) }
                /> <
                /div> <
                div className = "form-group" >
                <
                label htmlFor = "exampleInputEmail1" > Email < /label> <
                input type = "email"
                className = "form-control"
                id = "exampleInputEmail1"
                placeholder = "Email"
                value = { emailedit }
                onChange = {
                    (e) => setemailedit(pre => pre = e.target.value) }
                /> <
                small id = "emailHelp"
                className = "form-text text-muted" > We 'll never share your email with anyone else.</small> <
                /div>

                <
                button type = "submit"
                className = "btn btn-primary" > Update < /button> <
                /form>    <
                /div> <
                /div>

            )
        }
        export default ListSv;