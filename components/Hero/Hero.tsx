import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
	return (
		<section className={styles.hero} aria-labelledby="hero-title">
			<Image
				className={styles.heroImage}
				src="/images/camper-hero.webp"
				alt=""
				fill
				preload
				sizes="100vw"
			/>
			<div className={styles.heroContent}>
				<h1 id="hero-title">Campers of your dreams</h1>
				<p className={styles.description}>
					You can find everything you want in our catalog
				</p>
				<Link className={styles.primaryButton} href="/catalog">
					View now
				</Link>
			</div>
		</section>
	);
}
