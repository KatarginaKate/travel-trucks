"use client";

import { FormEvent, useState } from "react";

import { createBooking } from "../../services/booking";
import { validateBookingForm } from "../../lib/booking";

import styles from "./BookingForm.module.css";

type BookingFormProps = {
  camperId: string;
};

export default function BookingForm({ camperId }: BookingFormProps) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [successMessage, setSuccessMessage] = useState("");
  const [nameError, setNameError] = useState("");

  const [invalidFields, setInvalidFields] = useState({
    name: false,
    email: false,
  });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");
    setSuccessMessage("");

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();

    const invalid = validateBookingForm(name, email);

    setNameError(
      !name || /\d/.test(name)
        ? "Please enter your name."
        : "Name must be at least 3 characters.",
    );

    setInvalidFields(invalid);

    if (invalid.name || invalid.email) {
      setStatus("idle");
      return;
    }

    try {
      await createBooking(camperId, name, email);

      setStatus("success");
      setSuccessMessage(
        "Booking request accepted. We will contact you at email",
      );

      formElement.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={styles.form} onSubmit={submit} noValidate>
      <h2>Book your camper now</h2>

      <p>Stay connected! We are always ready to help you.</p>

      <label
        className={`${styles.field} ${
          invalidFields.name ? styles.invalidField : ""
        }`}
      >
        {invalidFields.name && (
          <span className={styles.fieldLabel}>Name*</span>
        )}

        <input
          className={invalidFields.name ? styles.invalid : ""}
          name="name"
          required
          minLength={3}
          placeholder="Name*"
          aria-invalid={invalidFields.name}
          onChange={() => {
            setInvalidFields((fields) => ({
              ...fields,
              name: false,
            }));
            setNameError("");
          }}
        />

        {invalidFields.name && (
          <span className={styles.fieldError}>
            <span aria-hidden="true">!</span>{" "}
            {nameError}
          </span>
        )}
      </label>

      <label
        className={`${styles.field} ${
          invalidFields.email ? styles.invalidField : ""
        }`}
      >
        {invalidFields.email && (
          <span className={styles.fieldLabel}>Email*</span>
        )}

        <input
          className={invalidFields.email ? styles.invalid : ""}
          name="email"
          type="email"
          required
          placeholder="Email*"
          aria-invalid={invalidFields.email}
          onChange={() => {
            setInvalidFields((fields) => ({
              ...fields,
              email: false,
            }));
          }}
        />

        {invalidFields.email && (
          <span className={styles.fieldError}>
            <span aria-hidden="true">!</span>{" "}
            Please enter your email.
          </span>
        )}
      </label>

      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send"}
      </button>

      {status === "success" && (
        <p className={styles.success} role="status">
          {successMessage}
        </p>
      )}

      {status === "error" && (
        <p className={styles.error} role="alert">
          Unable to send booking. Please try again.
        </p>
      )}
    </form>
  );
}