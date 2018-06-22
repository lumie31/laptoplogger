export default function(state = [], action) {
  // console.log(action);

  switch (action.type) {
    case "GET_LOGS":
      return action.payload;
    case "ADD_LOGS":
      return [...state, action.payload];
    default:
      return state;
  }
}
