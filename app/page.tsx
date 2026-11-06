"use client";

import { useMemo, useState } from "react";
import styles from "./page.module.css";

type DeviceMode = "mobile" | "desktop";

type AuditItem = {
	label: string;
	value?: string;
	severity?: "warning" | "info";
};

const auditSections: Record<
	DeviceMode,
	{ title: string; items: AuditItem[]; note: string }
> = {
	mobile: {
		title: "СТАТИСТИКА",
		items: [
			{ label: "Показчте показ зображень", value: "Очікуване заощадження: 1 473 КБ", severity: "warning" },
			{ label: "Запити, які блокують відображення", value: "Очікуване заощадження: 450 мс", severity: "warning" },
			{ label: "Застарілі функції JavaScript", value: "Очікуване заощадження: 14 КБ", severity: "warning" },
			{ label: "Виявлення запитів LCP", severity: "info" },
			{ label: "Дерево залежностей мережі", severity: "info" },
			{ label: "Розподіл LCP", severity: "info" },
		],
		note: "Ця статистика також доступна на панелі \"Продуктивність\" в Інструментах розробника Chrome. Щоб переглянути докладнішу інформацію, запишіть трасування.",
	},
	desktop: {
		title: "СТАТИСТИКА",
		items: [
			{ label: "Показчте показ зображень", value: "Очікуване заощадження: 1 473 КБ", severity: "warning" },
			{ label: "Запити, які блокують відображення", value: "Очікуване заощадження: 450 мс", severity: "warning" },
			{ label: "Застарілі функції JavaScript", value: "Очікуване заощадження: 14 КБ", severity: "warning" },
			{ label: "Виявлення запитів LCP", severity: "info" },
			{ label: "Дерево залежностей мережі", severity: "info" },
			{ label: "Розподіл LCP", severity: "info" },
		],
		note: "Ця статистика також доступна на панелі \"Продуктивність\" в Інструментах розробника Chrome. Щоб переглянути докладнішу інформацію, запишіть трасування.",
	},
} as const;

const diagnostics: AuditItem[] = [
	{ label: "Зменште код JavaScript, який не використовується", value: "Очікуване заощадження: 29 КБ", severity: "warning" },
	{ label: "Уникайте тривалих завдань у головному потоці", value: "Знайдено 1 тривале завдання", severity: "info" },
];

export default function Home() {
	const [deviceMode, setDeviceMode] = useState<DeviceMode>("mobile");
	const activeSection = useMemo(() => auditSections[deviceMode], [deviceMode]);

	return (
		<main className={styles.page}>
			<div className={styles.shell}>
				<div className={styles.deviceToggle} role="tablist" aria-label="Device type">
					<button
						type="button"
						className={`${styles.modeButton} ${deviceMode === "mobile" ? styles.active : ""}`}
						onClick={() => setDeviceMode("mobile")}
						aria-selected={deviceMode === "mobile"}
					>
						<span className={styles.iconBox} aria-hidden="true" />
						<span>Мобільний</span>
					</button>
					<button
						type="button"
						className={`${styles.modeButton} ${deviceMode === "desktop" ? styles.active : ""}`}
						onClick={() => setDeviceMode("desktop")}
						aria-selected={deviceMode === "desktop"}
					>
						<span className={styles.iconFrame} aria-hidden="true" />
						<span>Комп'ютер</span>
					</button>
				</div>

				<section className={styles.panelSection}>
					<h2 className={styles.sectionTitle}>{activeSection.title}</h2>
					<ul className={styles.auditList}>
						{activeSection.items.map((item: AuditItem) => (
							<li key={item.label} className={styles.auditItem}>
								<span className={`${styles.marker} ${item.severity === "warning" ? styles.warning : styles.info}`} aria-hidden="true" />
								<span className={styles.itemLabel}>{item.label}</span>
								{item.value ? <span className={styles.itemValue}>{item.value}</span> : null}
							</li>
						))}
					</ul>
					<p className={styles.inlineNote}>{activeSection.note}</p>
				</section>

				<section className={styles.panelSection}>
					<h2 className={styles.sectionTitle}>ДІАГНОСТИКА</h2>
					<ul className={styles.auditList}>
						{diagnostics.map((item: AuditItem) => (
							<li key={item.label} className={styles.auditItem}>
								<span className={`${styles.marker} ${item.severity === "warning" ? styles.warning : styles.info}`} aria-hidden="true" />
								<span className={styles.itemLabel}>{item.label}</span>
								{item.value ? <span className={styles.itemValue}>{item.value}</span> : null}
							</li>
						))}
					</ul>
					<p className={styles.explanation}>Докладніше про ефективність додача. Ці числа не впливають безпосередньо на значення ефективності.</p>
				</section>
			</div>
		</main>
	);
}
