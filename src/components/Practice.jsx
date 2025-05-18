import React from "react";

const Practice = () => {
const handleSubmit = (event) => {
  event.preventDefault();
  const formElements = event.currentTarget;
  const formData = new FormData(formElements);
  const email =formData.get("email");
  const password = formData.get("password");
  console.log("Email:", email);
  console.log("Password:", password);
  formElements.reset();
  alert("Form submitted successfully!");
}

  return (
    <main>
      <h1>Event Sign Up Form</h1>
      <form method="POST" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email"  name="email" placeholder="janedoe@gmail.com" />
        <br />
        <br />

        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </main>
  );
};

export default Practice;
