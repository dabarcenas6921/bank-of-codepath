import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransactionDetail from "../TransactionDetail/TransactionDetail";
import { useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [transfers, setTransfers] = useState([]);
  const [error, setError] = useState("");
  const [filterInputValue, setFilterInputValue] = useState("");

  React.useEffect(() => {
    console.log("app mounting..");
  }, []);

  return (
    <div className="App">
      <nav className="app">
        <BrowserRouter className="app">
          <Navbar
            filterInputValue={filterInputValue}
            setFilterInputValue={setFilterInputValue}
          />
          ç
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    transactions={transactions}
                    setTransactions={setTransactions}
                    transfers={transfers}
                    setTransfers={setTransfers}
                    error={error}
                    setError={setError}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    filterInputValue={filterInputValue}
                  />
                }
              />
              <Route
                path="/transactions/:transactionId"
                element={<TransactionDetail />}
              />
            </Routes>
          </main>
        </BrowserRouter>
      </nav>
    </div>
  );
}
