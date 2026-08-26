import Image from "next/image";
import styles from "./EmptyState.module.css";

type EmptyStateProps = {
	onClear: () => void;
};

export default function EmptyState({ onClear }: EmptyStateProps) {
	return (
		<div className={styles.emptyState}>
			<Image
				className={styles.emptyImage}
				src="/images/no-tracks.webp"
				alt=""
				width={360}
				height={360}
			/>
			<h1>No campers found</h1>
			<p>
				We couldn&apos;t find any campers that match your filters.
				<br />
				Try adjusting your search or clearing some filters.
			</p>
			<div className={styles.emptyActions}>
				<button type="button" onClick={onClear}>
					<span aria-hidden="true">×</span>
					Clear filters
				</button>
				<button type="button" onClick={onClear}>
					View all campers
				</button>
			</div>
		</div>
	);
}
