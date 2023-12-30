// Context
import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const HomeContext = createContext();

const initialState = {
    userName: '',
    budgets: [],
    expenses: [],
    };

const reducer = (state, action) => {
   switch(action.type) {
         case 'ADD_USER':
              return {
                ...state,
                userName: action.payload
              }
         case 'ADD_BUDGET':
              return {
                ...state,
                budgets: [...state.budgets, action.payload]
              }
         case 'ADD_EXPENSE':
              return {
                ...state,
                expenses: [...state.expenses, action.payload]
              }
         default:
              return state;
    }
}

function HomeProvider({ children }) {
    const [{expenses, budgets, userName}, dispatch] = useReducer(reducer, initialState);

    const addUser = (userName, email) => {
        dispatch({ type: 'ADD_USER', payload: {userName, email} })
    }

    const addBudget = (name, amount) => {
        dispatch({ type: 'ADD_BUDGET', payload: {name, amount} })
    }

    const addExpense = (name, amount, budgetId) => {
        dispatch({ type: 'ADD_EXPENSE', payload: {name, amount, budgetId} })
    }

    return (
        <HomeContext.Provider value={{ expenses, budgets, userName, addUser, addBudget, addExpense }}>
            {children}
        </HomeContext.Provider>
    )
    
}

const useHomeContext = () => {
    const context = useContext(HomeContext);
    if (context === undefined) {
        throw new Error('useHomeContext must be used within a HomeProvider')
    }
}

HomeProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export { HomeProvider, useHomeContext };