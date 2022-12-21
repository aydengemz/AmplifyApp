import React from "react";

export default function PostUI(props) {
    return (
      <li className="todo stack-small">
        <div className="c-cb">
          
          <h2 className="todo-label" htmlFor={props.id}>
           Title: {props.title}
          </h2>
          <p className="todo-label" htmlFor={props.id}>
          id: {props.id}
          </p>
          <p className="todo-label" htmlFor={props.id}>
          rating: {props.rating}
          </p>
          <p className="todo-label" htmlFor={props.id}>
          {props.content}
          </p>
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            Edit <span className="visually-hidden">Post</span>
          </button>
          <button type="button" className="btn btn__danger">
            Delete <span className="visually-hidden">Post</span>
          </button>
        </div>
      </li>
    );
  }
  