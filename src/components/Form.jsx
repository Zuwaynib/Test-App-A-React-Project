import React from "react";

const Form = () => {
  const signUp = (formData) => {
  const data = Object.fromEntries(formData);
  const dietaryRequirements = formData.getAll("dietaryRequirements");
  console.log(data, dietaryRequirements);
  };

  return (
    <main>
      <h1>Event Sign Up Form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          defaultValue="joe@schmoe.com"
          type="email"
          name="email"
          placeholder="joe@schmoe.com"
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          defaultValue="password123"
          type="password"
          name="password"
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          defaultValue="This is a description"
        ></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed"/>
            Unemployed
          </label>
          <label>
            <input type="radio" name="employmentStatus" defaultChecked={true} value="part-time"/>
            Part-time
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="full-time"/>
            Full-time
          </label>
        </fieldset>

        <fieldset>
          <legend>Dietary Requirements:</legend>
          <label>
            <input type="checkbox" name="dietaryRequirements" value="vegan"/>
            Vegan
          </label>
          <label>
            <input type="checkbox" name="dietaryRequirements" defaultChecked={true} value="gluten-free"/>
            Gluten-free
          </label>
          <label>
            <input type="checkbox" name="dietaryRequirements" value="lactose-intolerant"/>
            Lactose-intolerant
          </label>
        </fieldset>

        <button>Submit</button>
      </form>
    </main>
  );
};

export default Form;
