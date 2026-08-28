import Image from "next/image";
import Link from "next/link";
import type { Camper } from "../../types/camper";
import styles from "./CamperCard.module.css";

export type { Camper } from "../../types/camper";

const formLabels: Record<string, string> = {
	alcove: "Alcove",
	panel_van: "Panel Van",
	integrated: "Integrated",
	semi_integrated: "Semi-Integrated",
};

function formatPrice(price: number) {
	return `€${price.toLocaleString("en-US")}`;
}

function formatLabel(value: string) {
	return value
		.replaceAll("_", " ")
		.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function SpriteIcon({ name }: { name: string }) {
	return (
		<svg className={styles.icon} viewBox="0 0 32 32" aria-hidden="true">
			<use href={`/icons/sprite.svg#${name}`} />
		</svg>
	);
}

type CamperCardProps = { camper: Camper };

export default function CamperCard({ camper }: CamperCardProps) {
	return (
		<article className={styles.card}>
			<Image
				className={styles.cardImage}
				src={camper.coverImage}
				alt={camper.name}
				width={240}
				height={220}
			/>
			<div className={styles.cardBody}>
				<div className={styles.cardTop}>
					<h2>{camper.name}</h2>
					<strong>{formatPrice(camper.price)}</strong>
				</div>
				<p className={styles.meta}>
					<span className={styles.rating}>
						<SpriteIcon name="icon-star" /> {camper.rating} (
						{camper.totalReviews} Reviews)
					</span>
					<span>
						<SpriteIcon name="icon-Map" /> {camper.location}
					</span>
				</p>
				<p className={styles.description}>{camper.description}</p>
				<div className={styles.tags}>
					<span>
						<SpriteIcon name="icon-vector" /> {formatLabel(camper.transmission)}
					</span>
					<span>
						<SpriteIcon name="icon-petrol" /> {formatLabel(camper.engine)}
					</span>
					<span>
						<SpriteIcon name="icon-car" />
						{formLabels[camper.form] || formatLabel(camper.form)}
					</span>
				</div>
				<Link className={styles.moreButton} href={`/catalog/${camper.id}`}>
					Show more
				</Link>
			</div>
		</article>
	);
}
