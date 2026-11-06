import styles from "./page.module.css";

const ariaIssues = [
	"Атрибути <span className=\"code\">[aria-*]</span> не відповідають своїм ролям",
	"В елементах АРІА <span className=\"code\">[role]</span>, які вимагають дочірні елементи з певним атрибутом <span className=\"code\">[role]</span>, немає кількох або всіх дочірніх елементів.",
];

const contrastIssue =
	"Між кольорами фону та переднього плану недостатній коефіцієнт контрастності.";

export default function Home() {
	return (
		<main className={styles.page}>
			<div className={styles.shell}>
				<div className={styles.deviceToggle} role="tablist" aria-label="Device type">
					<button type="button" className={`${styles.modeButton} ${styles.active}`} aria-selected="true">
						<span className={styles.iconBox} aria-hidden="true" />
						<span>Мобільний</span>
					</button>
					<button type="button" className={styles.modeButton} aria-selected="false">
						<span className={styles.iconFrame} aria-hidden="true" />
						<span>Комп'ютер</span>
					</button>
				</div>

				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>ARIA</h2>
					<ul className={styles.list}>
						{ariaIssues.map((content, index) => (
							<li key={content} className={styles.listItem}>
								<span className={styles.marker} aria-hidden="true" />
								<span
									dangerouslySetInnerHTML={{
										__html: content,
									}}
									className={styles.itemText}
								/>
								<span className={styles.caret} aria-hidden="true" />
							</li>
						))}
					</ul>
					<p className={styles.helperText}>
						Ці рекомендації допоможуть покращити використання ролей ARIA у вашому додатку, що
						може позитивно вплинути на взаємодію для користувачів допоміжних технологій, як-от
						програм зміцтування з екрана.
					</p>
				</section>

				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>КОНТРАСТ</h2>
					<ul className={styles.list}>
						<li className={styles.listItem}>
							<span className={styles.marker} aria-hidden="true" />
							<span className={styles.itemText}>{contrastIssue}</span>
							<span className={styles.caret} aria-hidden="true" />
						</li>
					</ul>
					<p className={styles.helperText}>Ці рекомендації допоможуть покращити читабельність вмісту.</p>
				</section>
			</div>
		</main>
	);
}
