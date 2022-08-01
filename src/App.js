import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";
import { AuthContext } from "./context/index";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   if (localStorage.getItem("Auth")) {
  //     setIsAuth(true);
  //     setIsLoading(false);
  //   }
  // }, []);

  useEffect(() => {
    setIsAuth(true);
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      <BrowserRouter>
        <Navbar />

        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
//  управляемый компонент, это компонент, в котором мы можем изменить значение [value], изменив его состояние [setValue]
