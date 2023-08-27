export const initialState = {
    isVisible: false
}

export const contactMeReducer = (state = initialState, action) => {
    if (action.type === "Show") {
        return {
            ...state,
            isVisible: true
        }
    }else if(action.type === "Hide"){
        return {
            ...state,
            isVisible: false 
        }
    }else{
        return state
    }

}