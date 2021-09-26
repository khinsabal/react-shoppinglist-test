import "./styles.css";
import React from "react";
import ShoppingList from "./components/ShoopingList";

export const App = () => {
  return (
    <>
      <div className="shopping-app">
        <ShoppingList />
      </div>
    </>
  );
};
