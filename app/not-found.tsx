import Link from "next/link";
import styles from "./error.module.css";

export default function NotFound() {
	return (
		<main className={styles.page}>
			<section className={styles.content} aria-labelledby="not-found-title">
				<span className={styles.code}>404</span>
				<h1 className={styles.title} id="not-found-title">Page not found</h1>
				<p className={styles.description}>
					The page you are looking for does not exist or has been moved.
				</p>
				<Link className={styles.action} href="/catalog">
					View campers
				</Link>
			</section>
		</main>
	);
}
