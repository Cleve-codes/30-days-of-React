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
    localStorage.setItem("budgets", JSON.stringify(budgets));
  }, [budgets]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("userName", JSON.stringify(userName));
  }, []);

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
