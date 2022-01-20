export const SET_DOCUMENTARIES = "SET_DOCUMENTARIES";
export const SET_FILTER = "SET_FILTER";

// We can put the name that we want in "value". value = data
export function setDocumentaries(value) {
  console.log("SET_MOVIES action triggered");
  return {
    type: SET_DOCUMENTARIES,
    value,
  };
}

export function setFilter(value) {
  return {
    type: SET_FILTER,
    value,
  };
}
