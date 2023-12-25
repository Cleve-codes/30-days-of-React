export const wait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 2000));

export const fetchData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const generateRandomColor = () => {
  const existingBudgetsLength = localStorage.getItem("budgets")?.length ?? 0;
  return `${existingBudgetsLength * 34} 65% 50%`;
};

export const createUser = async (name, email) => {
  const user = {
    name: name,
    email: email,
  };
  return user;
};

export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(),
  };
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newItem])
  );
};

export const createExpense = ({ name, amount, budgetId }) => {
  const newExpense = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId: budgetId,
  };

  const existingBudgets = fetchData("budgets") ?? [];
  const existingExpenses = fetchData("expenses") ?? [];

  const budgetExists = existingBudgets.some((budget) => budget.id === budgetId);
  if (budgetExists) {
    existingExpenses.push(newExpense);
    localStorage.setItem("expenses", JSON.stringify(existingExpenses));
  } else {
    console.log("Budget does not exist");
  }
};

// Total spent by budget
export const totalSpent = (budgetId) => {
  const expenses = fetchData("expenses") ?? [];
  const budgetSpent = expenses.reduce((acc, expense) => {
    if (expense.budgetId === budgetId) {
      return acc + expense.amount;
    }
    return acc;
  }, 0);
  return budgetSpent;
};

export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};

// FORMATTING FUNCTIONS
// Format currency
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

// Format Percentage
export const formatPercentage = (amount) => {
  return new Intl.NumberFormat(undefined, {
    style: "percent",
    maximumFractionDigits: 2,
  }).format(amount);
};
