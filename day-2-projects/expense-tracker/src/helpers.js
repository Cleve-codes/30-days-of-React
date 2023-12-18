export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

export const createUser = async (name, email) => {
  const user = {
    name: name,
    email: email,
  }
  return user;
}

export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key)
}
