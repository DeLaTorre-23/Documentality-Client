export const SET_DOCUMENTARIES = "SET_DOCUMENTARIES";
export const SET_FILTER = "SET_FILTER";

export function setDocumentaries(value) {
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
