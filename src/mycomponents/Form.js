import React, { useState } from "react";



function Form(props) {


    const [title, setTitle] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.addPost(title);
        setTitle("");
      }
      
    function handleChange(e) {
        setTitle(e.target.value)
    }
      
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What is Happening Right Now?
        </label>
      </h2>
      <input
  type="text"
  id="new-todo-input"
  className="input input__lg"
  name="text"
  autoComplete="off"
  value={title}
  onChange={handleChange}
/>
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
