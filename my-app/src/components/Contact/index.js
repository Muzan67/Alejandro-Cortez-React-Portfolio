import React, { useState } from "react";
// import './style.css';

// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from "../../utils/helper";

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "Name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !Name) {
      setErrorMessage("Email or username is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!checkPassword(message)) {
      setErrorMessage(`Choose a more secure password for the account: ${Name}`);
      return;
    }
    alert(`Hello ${Name}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div>
      <h1 class="contact" style={{ textAlign: "center" }}>
        Contact
      </h1>
      {/* <p style={{textAlign:"center"}}> Contact {userName}</p> */}
      <form className="form">
        <p>Name</p>
        <input
          value={Name}
          name="userName"
          onChange={handleInputChange}
          type="text"
          //   placeholder="username"
        />
        <p>Email Address</p>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          //   placeholder="email"
        />
        <p>Message</p>
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="messagepassword"
          //   placeholder="Password"
        />
        <br></br>
        <br></br>
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
