"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../common/Logo/Logo";
import ThemeToggle from "../common/ThemeToggle/ThemeToggle";
import styles from "./Header.module.css";

export default function Header() {
	const pathname = usePathname();
	const isHomePage = pathname === "/";
	const isCatalogPage = pathname === "/catalog" || pathname.startsWith("/catalog/");

	return (
		<header className={styles.header}>
			<div className={styles.inner}>
				<Logo />

				<nav className={styles.navigation} aria-label="Main navigation">
					<Link
						className={isHomePage ? styles.activeLink : styles.catalogLink}
						href="/"
						aria-current={isHomePage ? "page" : undefined}
					>
						Home
					</Link>
					<Link
						className={isCatalogPage ? styles.activeLink : styles.catalogLink}
						href="/catalog"
						aria-current={isCatalogPage ? "page" : undefined}
					>
						Catalog
					</Link>
				</nav>
				<ThemeToggle />
			</div>
		</header>
	);
}
