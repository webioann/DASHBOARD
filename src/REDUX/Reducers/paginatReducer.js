const BIG = "BIG";
const MEDIUM = "MEDIUM";
const SMALL = "SMALL";
const XSMALL = "XSMALL";

const defaultState = { paginat: 10};

const paginatReducer = (state = defaultState,action) => {
  switch (action.type) {
    case BIG :
      return {...state,paginat: 20 }             
    case MEDIUM :
      return {...state,paginat: 15 }
    case SMALL :
      return {...state,paginat: 10 }
    case XSMALL :
      return {...state,paginat: 5 } 
   
    default: 
      return state  
  }
};
export const bigAction = (payload) => ({type:BIG, payload})
export const mediumAction = (payload) => ({type:MEDIUM, payload})
export const smallAction = (payload) => ({type:SMALL, payload})
export const xsmallAction = (payload) => ({type:XSMALL, payload})

export default paginatReducer ;