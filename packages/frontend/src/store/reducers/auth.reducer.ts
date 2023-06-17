import { LOGIN_SUCCESS, LOGIN_ERROR, GET_USER } from "../constants";
import { saveUserData, getUserData } from "@loginflow/api";
const initialState = {
    loading: true,
    error: {},
    user: {},
}
export const auth = (state=initialState, action: any) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            saveUserData(action.payload)
            .then(res => {
                return {
                    loading: false,
                    error: '',
                    user: action.payload
                }
            })
            .catch(err => {
                return {
                    loading: false,
                    error: err,
                    user: {}
                }
            });
        case LOGIN_ERROR:
            return {
                loading: false,
                error: action.payload,
                user: {}
            }
        case GET_USER:
            getUserData()
            .then(user => {
                // console.log("User", user);
                return {
                    loading: false,
                    error: '',
                    user: user,
               }
            })
            .catch(err => {
                // console.log("Err", err);
                return {
                    loading: false,
                    error: { text: 'Can\'t get User'} ,
                    user: {},
                }
            });

        default:
            return state;
    }
}
