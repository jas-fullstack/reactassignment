export const listUsers = () => {
    return (dispatch) => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json =>
                dispatch({ type: 'LISTUSERS', payload: json })
            )
    }
}
export const loginAction = (action) => {
    console.log("action.email--->", action.email.email)
    if (action.email.email == "sanjeevkumar@smartdatainc.net") {
        localStorage.setItem("userdata", JSON.stringify(action.email))
        return {
            type: 'LOGIN',
            payload: action
        }
    } else {
        return (dispatch) => {
            dispatch({ type: 'INVALIDUSER', payload: { error_msg: "Invalid user email" } })
        }
    }
}
