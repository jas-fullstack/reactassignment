const usersReducer = (state = [] , action) =>{
    console.log("action.type--->",action)
    switch (action.type) {
        case "LISTUSERS":
            return [...state, action.payload]
        default:
          return state
      }
}
export default usersReducer;