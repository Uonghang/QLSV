import { ADD, REMOVE, EDIT } from '../action/type'
var sinhvien = [{
        id: 1,
        name: "Uông Thị Hăng",
        age: 22,
        Email: "Uonghangkin@gmail.com"
    },
    {
        id: 2,
        name: "Uông Thị Hăng",
        age: 22,
        Email: "Uonghangkin@gmail.com"
    },
    {
        id: 3,
        name: "Uông Thị Hăng",
        age: 22,
        Email: "Uonghangkin@gmail.com"
    }
]
const Store = (state = sinhvien, action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.payload.sv]
        case REMOVE:
            return state.filter(sv => sv.id !== action.payload.id)
        case EDIT:
            let index = state.findIndex(pre => pre.id === action.payload.sv.id);
            console.log(index);
            let sv = [...state];
            console.log(sv);
            sv[index] = action.payload.sv;
            return sv;
        default:
            return state;
    }
}
export default Store;