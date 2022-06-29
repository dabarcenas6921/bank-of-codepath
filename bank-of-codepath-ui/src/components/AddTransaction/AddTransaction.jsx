import * as React from "react";
import { useEffect } from "react";
import "./AddTransaction.css";

export default function AddTransaction({
  isCreating,
  setIsCreating,
  form,
  setForm,
  handleOnSubmit,
}) {
  const handleOnFormFieldChange = (change) => {
    const { name, value } = change.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div className="add-transaction">
      <h2>Add Transaction</h2>

      <AddTransactionForm
        handleOnFormFieldChange={handleOnFormFieldChange}
        form={form}
        handleOnSubmit={handleOnSubmit}
        isCreating={isCreating}
      />
    </div>
  );
}

export function AddTransactionForm({
  handleOnFormFieldChange,
  form,
  handleOnSubmit,
  isCreating,
}) {
  console.log("value of form:", form);
  if (form) {
    return (
      <div className="form">
        <div className="fields">
          <div className="field">
            <label>Description</label>
            <input
              name="description"
              value={form.description}
              type="text"
              onChange={handleOnFormFieldChange}
            />
          </div>
          <div className="field">
            <label>Category</label>
            <input
              name="category"
              value={form.category}
              type="text"
              onChange={handleOnFormFieldChange}
            />
          </div>
          <div className="field half-flex">
            <label>Amount (cents)</label>
            <input
              name="amount"
              value={form.amount}
              type="number"
              onChange={handleOnFormFieldChange}
            />
          </div>

          <button
            className="btn add-transaction"
            type="submit"
            onClick={handleOnSubmit}
          >
            Add
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
