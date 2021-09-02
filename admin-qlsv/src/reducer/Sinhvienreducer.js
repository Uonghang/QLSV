import { createStore } from "redux"
import { combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import sinhvien from './index'
const SinhvienReducer = () => {
    return createStore(
        combineReducers({
            sv: sinhvien,
        }),
        composeWithDevTools()
    )
}
export default SinhvienReducer;