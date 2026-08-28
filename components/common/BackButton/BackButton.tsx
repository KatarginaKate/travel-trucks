"use client";

import { useRouter } from "next/navigation";
import styles from "./BackButton.module.css";

export default function BackButton() {
  const router = useRouter();

  function goBack() {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/catalog");
  }

  return (
    <button className={styles.button} type="button" onClick={goBack}>
      <span aria-hidden="true">←</span>
      Back to catalog
    </button>
  );
}
