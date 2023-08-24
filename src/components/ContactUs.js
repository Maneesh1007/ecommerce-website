import { useRef } from "react";

const ContactUs = () => {
  const name = useRef("");
  const email = useRef("");
  const phone = useRef("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const person = {
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
    };
    const response = await fetch(
      "https://react-a03c1-default-rtdb.firebaseio.com/contact.json",
      {
        method: "POST",
        body: JSON.stringify(person),
      }
    );

    const data = response.json();
    console.log(data);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Name</label>
      <input type="text" ref={name} required></input>
      <label>Email</label>
      <input type="email" ref={email} required></input>
      <label>Phone Number</label>
      <input type="number" ref={phone} required></input>
      <button>Submit</button>
    </form>
  );
};

export default ContactUs;
