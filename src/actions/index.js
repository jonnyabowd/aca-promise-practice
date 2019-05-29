export const setUsers = (users) => {
    return {
      type: "SET_USERS",
      value: users
    }
  }

//   this action is fetching our data from the api, returning a json file, then dispatching(?) while calling the setUsers action above
  export const getUsersFromAPI = () => {
      return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => {
            dispatch(setUsers( users ))
        })
      }
  }