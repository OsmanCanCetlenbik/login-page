import logo from "./logo.png";
import "./App.css";
import { FiMail } from "react-icons/fi";
import { AiFillLock } from "react-icons/ai";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_erk9209",
        "template_2k5i5l6",
        form.current,
        "GyoZD-3er2K-KhUh-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="App">
      <div className="loginPageContainer">
        <div className="imageWrapper">
          <img src={logo} alt="" />
        </div>
        <div className="inputWrapper">
          <h1>Kimlik Yönetim Sistemi</h1>
          <form
            action="submit"
            className="form"
            onSubmit={sendEmail}
            ref={form}
          >
            <FiMail className="mailIcon" />
            <input type="Email" placeholder="Email" name="user_email" />
            <AiFillLock className="lockIcon" />
            <input type="password" placeholder="Şifre" name="user_password" />
            <button type="submit">Giriş</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
