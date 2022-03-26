import axios from "axios";
import { loginFailure, loginStart, loginSuccess, logout } from "./AuthActions";

export const login = async (user, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

export const logOut = async (user, dispatch) => {
    dispatch(logout());
    try {
        const res = await axios.post("auth/logout", { token: user.token });
        // console.log(err);
    } catch (err) {
        console.log(err);
    }
};
