const defaultState = 
  { control : "default control",
    user: "John",
    age: 34
  }

const controlReducer = (state = defaultState,action) => {
    switch (action.type) {
      case "STEP1":
        return {...state, control: "step1 control", user: "David", age: 12 }             
      case "STEP2":
        return {...state,control: "step2 control" }
      case "STEP3":
        return {...state,control: "step3 control" } 
      default: 
        return state  
    }
}

export default controlReducer ;