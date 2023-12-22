export const fetchData = (key) => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : null;
}

export const wait = () => new Promise(res => setTimeout(
  res, Math.random() * 2000
))

export const generateRandomColor = () => {
  const existingBudgetsLength = localStorage.getItem('budgets')?.length ?? 0;
  return `${existingBudgetsLength * 34} 65% 50%`
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
    color: generateRandomColor(),
  }
  const existingBudgets = fetchData('budgets') ?? [];
  return localStorage.setItem('budgets', JSON.stringify([...existingBudgets, newItem]))
}

export const createExpense = ({
  name, amount, budgetId
}) => {
  const newExpense = {
    id: crypto.randomUUID(),
    name: name,
    createAt: Date.now(),
    amount: +amount,
    budgetId: budgetId,
  }
  
  const existingExpenses = fetchData('expenses') ?? [];
  return localStorage.setItem('expenses', JSON.stringify([...existingExpenses, newExpense]))
}

export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
}
