import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

function MyForm() {
  const { form, send, changed } = useForm({});

  return (
    <div>
      <h1>form</h1>
      <p>form to save a course</p>
      <p>course saved: {form.title}</p>
      {/* <pre>{form}</pre> */}
      {/* lhaig de pasar com a json.stringify per veure-ho */}
      <pre className="code">{JSON.stringify(form)}</pre>
      <form onSubmit={send} className="my-form">
        <input
          type="text"
          name="title"
          placeholder="Title:"
          onChange={changed}
        ></input>
        <input
          type="number"
          name="year"
          placeholder="Year publication:"
          onChange={changed}
        ></input>
        <textarea
          name="description"
          placeholder="Description:"
          onChange={changed}
        ></textarea>
        <input
          type="text"
          name="author"
          placeholder="Author:"
          onChange={changed}
        />
        <input
          type="email"
          name="email"
          placeholder="contact email:"
          onChange={changed}
        />
        <input type="submit" value="send" />
      </form>
    </div>
  );
}

export default MyForm;
