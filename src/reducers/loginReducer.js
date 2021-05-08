const loginReducer = (state = [] , action) =>{
    console.log("action.type--->",action)
    switch (action.type) {
        case "LOGIN":
            return [...state, action.payload]
        case "INVALIDUSER" :
            return [...state, action.payload]
        default:
          return state
      }
}
export default loginReducer;