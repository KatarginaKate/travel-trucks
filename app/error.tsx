"use client";

import styles from "./error.module.css";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
	return (
		<main className={styles.page}>
			<section className={styles.content} aria-labelledby="error-title">
				<span className={styles.code}>500</span>
				<h1 className={styles.title} id="error-title">Something went wrong</h1>
				<p className={styles.description}>
					We could not complete your request. Please try again.
				</p>
				<button className={styles.action} type="button" onClick={() => reset()}>
					Try again
				</button>
			</section>
		</main>
	);
}
