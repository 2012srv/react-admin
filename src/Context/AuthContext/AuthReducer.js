const AuthReducer = (state, action) => {
    switch (action.type) {
        case "THEME_CHANGE":
            return {
                user: null,
                isFetching: false,
                error: false,
                theme: action.payload
            };
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false,
                theme: state.theme
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false,
                theme: state.theme
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: true,
                theme: state.theme
            };
        case "LOGOUT":
            return {
                user: null,
                isFetching: false,
                error: false,
                theme: state.theme
            };
        default:
            return { ...state };
    }
};

export default AuthReducer;
