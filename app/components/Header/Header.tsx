import Link from "next/link";
import Logo from "../common/Logo/Logo";
import styles from "./Header.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.inner}>
				<Logo />

				<nav className={styles.navigation} aria-label="Main navigation">
					<Link className={styles.activeLink} href="/">
						Home
					</Link>
					<Link className={styles.catalogLink} href="/catalog">
						Catalog
					</Link>
				</nav>
			</div>
		</header>
	);
}
