import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../CSS/contact.css";
import { init, sendForm } from "emailjs-com";
init("XSbTiwyEM6IpQGbjO");

export function Contact() {
  const [statusMessage, setStatusMessage] = useState("Message");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    const form = document.querySelector("#contact-form");
    const statusMessage = document.querySelector(".status-message");
    sendForm("contact_form_gmail", "template_t4ovryt", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        form.reset();
        setStatusMessage("Mensaje enviado!");
        statusMessage.className = "status-message success";
        setTimeout(() => {
          statusMessage.className = "status-message";
        }, 5000);
      },
      function (error) {
        console.log("FAILED...", error);
        setStatusMessage(
          "El mensaje no se ha enviado. Inténtalo otra vez más tarde."
        );
        statusMessage.className = "status-message failure";
        setTimeout(() => {
          statusMessage.className = "status-message";
        }, 5000);
      }
    );
  };
  const message = watch("message") || "";

  return (
    <div className="contact" id="contact">
      <h2>Contacto</h2>

      <p className="status-message">{statusMessage}</p>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        {errors.user_name && errors.user_name.type === "required" && (
          <div role="alert">
            Añade tu nombre
            <br />
          </div>
        )}
        <input
          type="text"
          aria-invalid={errors.user_name ? "true" : "false"}
          {...register("user_name", { required: true })}
          placeholder="Nombre"
        />
        <br />
        {errors.user_email && errors.user_email.type === "required" && (
          <div role="alert">
            Añade tu email
            <br />
          </div>
        )}
        <input
          type="email"
          aria-invalid={errors.user_email ? "true" : "false"}
          {...register("user_email", { required: true })}
          placeholder="Email"
        />
        <br />
        {errors.message && errors.message.type === "required" && (
          <div role="alert">
            Añade un mensaje
            <br />
          </div>
        )}
        <textarea
          maxLength="1500"
          aria-invalid={errors.message ? "true" : "false"}
          {...register("message", { required: true })}
          placeholder="Mensaje"
        />
        <p className="message-chars-left">{message.length}/1500</p>
        <br />
        <div className="send-button">
          <input type="submit" value="Envía" />
        </div>
      </form>
    </div>
  );
}
