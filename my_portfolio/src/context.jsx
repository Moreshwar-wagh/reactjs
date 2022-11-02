// Create a context (warehouse)
// Provider
// Consumer / useContext

import React, { useReducer, useContext, useEffect } from "react";
import reducer from "./reducer"

const AppContext = React.createContext();

const API = "https://thapareactapi.up.railway.app/"

const intialState = {
    name: "",
    image: "",
    services: [],
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, intialState);

    const updateHomePage = () => {
        return dispatch(
            {
                type: "HOME_UPDATE",
                payload: {
                    name: "Wagh Moreshwar",
                    image: "./images/hero.svg",
                },
            }
        )
    }

    const updateAboutPage = () => {
        return dispatch(
            {
                type: "ABOUT_UPDATE",
                payload: {
                    name: "Moreshwar Wagh",
                    image: "./images/about1.svg"
                },
            }
        )
    }

    // API data
    const getServices = async (url) => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            dispatch({ type: "GET_SERVICES", payload: data })
        } catch (error) {
            console.log(error)
        }
    }

    // call API
    useEffect(() => {
          getServices(API)
    }, [])


    return (
        <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
            {children}
        </AppContext.Provider>
    )
};

// custom hooks
const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }