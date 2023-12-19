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

export const createBudget = ({
  name, amount
}) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createAt: Date.now(),
    amount: +amount,
    // color
  }
  const existingBudgets = fetchData('budgets') ?? [];
  return localStorage.setItem('budgets', JSON.stringify([...existingBudgets, newItem]))
}

export const deleteItem = () => {
  return null;
}
