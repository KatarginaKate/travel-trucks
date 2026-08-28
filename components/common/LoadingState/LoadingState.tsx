import styles from "./LoadingState.module.css";

export default function LoadingState() {
	return (
		<div className={styles.loadingOverlay}>
			<div className={styles.loadingState} role="status">
				<span className={styles.spinner} aria-hidden="true" />
				<h2>Loading trucks...</h2>
				<p>
					Please wait while we fetch the best
					<br />
					travel trucks for you
				</p>
			</div>
		</div>
	);
}
