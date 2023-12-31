// Context
import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { generateRandomColor } from "../helpers";

const HomeContext = createContext();

const initialState = {
  userName: "",
  budgets: [],
  expenses: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        userName: action.payload.userName,
      };
    case "ADD_BUDGET":
      return {
        ...state,
        budgets: [...state.budgets, action.payload],
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "LOAD_BUDGETS":
      return {
        ...state,
        budgets: action.payload,
      };
    default:
      return state;
  }
};

function HomeProvider({ children }) {
  const [{ expenses, budgets, userName }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const addUser = (userName, email) => {
    dispatch({ type: "ADD_USER", payload: { userName, email } });

    // Initilize expenses and budgets in localStorage
    if (!localStorage.getItem("expenses")) {
      localStorage.setItem("expenses", JSON.stringify([]));
    }

    if (!localStorage.getItem("budgets")) {
      localStorage.setItem("budgets", JSON.stringify([]));
    }

    localStorage.setItem("userName", JSON.stringify(userName));
  };

  const addBudget = (name, amount) => {
    const newBudget = {
      id: crypto.randomUUID(),
      name: name,
      createdAt: new Date().toISOString(),
      amount: amount,
      color: generateRandomColor(),
    };

    dispatch({ type: "ADD_BUDGET", payload: newBudget });

    //Save to local storage
    const currentBudgets = JSON.parse(localStorage.getItem("budgets")) || [];
    currentBudgets.push(newBudget);
    localStorage.setItem("budgets", JSON.stringify(currentBudgets));
  };

  const addExpense = (name, amount, budgetId) => {
    const newExpense = {
      id: crypto.randomUUID(),
      name: name,
      createdAt: new Date().toISOString(),
      amount: amount,
      budgetId: budgetId,
    };

    dispatch({ type: "ADD_EXPENSE", payload: newExpense });
  };

  useEffect(() => {
    const savedBudgets = JSON.parse(localStorage.getItem("budgets")) || [];
    if (
      savedBudgets &&
      JSON.stringify(savedBudgets) !== JSON.stringify(budgets)
    ) {
      dispatch({ type: "LOAD_BUDGETS", payload: savedBudgets });
    }
  }, [budgets]);

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    if (
      savedExpenses &&
      JSON.stringify(savedExpenses) !== JSON.stringify(expenses)
    ) {
      dispatch({ type: "LOAD_EXPENSES", payload: savedExpenses });
    }
  }, [expenses]);

  return (
    <HomeContext.Provider
      value={{ expenses, budgets, userName, addUser, addBudget, addExpense }}
    >
      {children}
    </HomeContext.Provider>
  );
}

const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (context === undefined) {
    throw new Error("useHomeContext must be used within a HomeProvider");
  }
  return context;
};

HomeProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export { HomeProvider, useHomeContext };
