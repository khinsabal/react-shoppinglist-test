import React, { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";
import Shopping from "./Shopping";

function ShoppingList() {
  const [stockList, setStockList] = useState([]);

  const addStock = (stock) => {
    if (!stock.text || /^\s*$/.test(stock.text)) {
      return;
    }

    const newStockList = [...stockList, stock];

    setStockList(newStockList);
  };

  const updateStock = (stockId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setStockList((prev) =>
      prev.map((item) => (item.id === stockId ? newValue : item))
    );
  };

  const removeStock = (id) => {
    const removedArr = [...stockList].filter((stock) => stock.id !== id);

    setStockList(removedArr);
  };

  const completeStock = (id) => {
    let updatedStockName = stockList.map((stock) => {
      if (stock.id === id) {
        stock.isComplete = !stock.isComplete;
      }
      return stock;
    });
    setStockList(updatedStockName);
  };

  return (
    <>
      <h1>買い物リスト</h1>
      <ShoppingListForm onSubmit={addStock} />
      <Shopping
        stockList={stockList}
        completeStockList={completeStock}
        removeStock={removeStock}
        updateStockName={updateStock}
      />
    </>
  );
}

export default ShoppingList;
