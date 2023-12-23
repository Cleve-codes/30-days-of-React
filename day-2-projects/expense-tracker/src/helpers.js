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
    createAt: Date.now(),
    amount: +amount,
    budgetId: budgetId,
  };

  // const existingExpenses = fetchData("expenses") ?? [];
  // const updatedExpenses = [...existingExpenses, newExpense];
  // localStorage.setItem("expenses", JSON.stringify(updatedExpenses));

  const existingBudgets = fetchData("budgets") ?? [];
  const updatedBudgets = existingBudgets.map((budget) => {
    if (budget.id === budgetId) {
      return {
        ...budget,
        expenses: [
          ...(budget.expenses || []),
          {
            id: newExpense.id,
            name: newExpense.name,
            amount: newExpense.amount,
          },
        ],
      };
    }
    return budget;
  });

  


  // Link the expense to the corresponding budget

  localStorage.setItem("budgets", JSON.stringify(updatedBudgets));
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
