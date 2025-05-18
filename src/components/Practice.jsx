import React from "react";

const Practice = () => {
  return (
    <main>
      <h1>Event Sign Up Form</h1>
      <form>
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
