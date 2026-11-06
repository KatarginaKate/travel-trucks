import Link from "next/link";
import Logo from "../common/Logo/Logo";
import ThemeToggle from "../common/ThemeToggle/ThemeToggle";
import styles from "./Header.module.css";

type HeaderProps = {
	activePage?: "home" | "catalog";
};

export default function Header({ activePage }: HeaderProps) {
	return (
		<header className={styles.header}>
			<div className={styles.inner}>
				<Logo />

				<nav className={styles.navigation} aria-label="Main navigation">
					<Link
						className={activePage === "home" ? styles.activeLink : styles.catalogLink}
						href="/"
						aria-current={activePage === "home" ? "page" : undefined}
					>
						Home
					</Link>
					<Link
						className={activePage === "catalog" ? styles.activeLink : styles.catalogLink}
						href="/catalog"
						aria-current={activePage === "catalog" ? "page" : undefined}
					>
						Catalog
					</Link>
				</nav>
				<ThemeToggle />
			</div>
		</header>
	);
}
