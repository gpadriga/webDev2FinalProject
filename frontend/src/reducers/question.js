
export default (state = {}, action) => {


    switch (action.type) {

        case "SINGLE_QUESTION":

            let obj = {};
            obj = action.payload;
            return { ...obj };
        case "DELETE_QUESTION":

            // obj = {};
            return null;
        default:
            return state;
    }

}