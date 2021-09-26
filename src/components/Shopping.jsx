import React, { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Shopping = ({
  stockList,
  completeStockList,
  removeStock,
  updateStockName
}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ""
  });

  const submitUpdate = (value) => {
    updateStockName(edit.id, value);
    setEdit({
      id: null,
      value: ""
    });
  };

  if (edit.id) {
    return <ShoppingListForm edit={edit} onSubmit={submitUpdate} />;
  }

  return stockList.map((stock, index) => (
    <div
      className={stock.isComplete ? "shopping-row complete" : "shopping-row"}
      key={index}
    >
      <div key={stock.id} onClick={() => completeStockList(stock.id)}>
        {stock.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeStock(stock.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: stock.id, value: stock.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};
export default Shopping;
