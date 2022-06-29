import * as React from "react";
import { useEffect, useState } from "react";
import AddTransaction from "../AddTransaction/AddTransaction";
import BankActivity from "../BankActivity/BankActivity";
import "./Home.css";
import axios from "axios";

export default function Home({
  transactions,
  setTransactions,
  transfers,
  setTransfers,
  error,
  setError,
  isLoading,
  setIsLoading,
  filterInputValue,
}) {
  const filteredTransactions = transactions
    ? transactions.filter((transaction) => {
        return filterInputValue.length
          ? transaction.description
              .toLowerCase()
              .includes(filterInputValue.toLowerCase())
          : transactions;
      })
    : null;
  useEffect(() => {
    setIsLoading(true);

    const getTransactions = async () => {
      let transactionURL = "http://localhost:3001/bank/transactions";
      try {
        let transactionResult = await axios.get(transactionURL);
        console.log(transactionResult);
        setTransactions(transactionResult.data.transactions);
      } catch (e) {
        console.log(e);
        setError(e);
      }
    };

    const getTransfers = async () => {
      let transferURL = "http://localhost:3001/bank/transfers";
      try {
        let transferResult = await axios.get(transferURL);
        setTransfers(transferResult.data.transfers);
      } catch (e) {
        console.log(e);
        setError(e);
      }
    };

    getTransactions();
    getTransfers();

    setIsLoading(false);

    console.log("home mounting...");
  }, []);

  return (
    <div className="home">
      <AddTransaction />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <BankActivity transactions={filteredTransactions} />
      )}
      {error ? <h2 className="error">{error}</h2> : null}
    </div>
  );
}
