import React, { useState, useEffect, useRef } from "react";

function ShoppingListForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit} className="shopping-form">
      {props.edit ? (
        <>
          <input
            placeholder="商品名を修正してくだいさい"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="shoppinglist-input edit"
          />
          <button onClick={handleSubmit} className="shopping-button edit">
            修正
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="商品名を入力してください"
            value={input}
            onChange={handleChange}
            name="text"
            className="shopping-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="shopping-button">
            追加
          </button>
        </>
      )}
    </form>
  );
}
export default ShoppingListForm;
