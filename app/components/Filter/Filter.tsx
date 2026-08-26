import type { FormEvent } from "react";
import type { FilterValues } from "../../types/camper";
import styles from "./Filter.module.css";

export type { FilterValues } from "../../types/camper";

type FilterProps = {
	values: FilterValues;
	onChange: (values: FilterValues) => void;
	onSubmit: (event: FormEvent<HTMLFormElement>) => void;
	onClear: () => void;
};

const formOptions = [
	["alcove", "Alcove"],
	["panel_van", "Panel van"],
	["integrated", "Integrated"],
	["semi_integrated", "Semi-integrated"],
];

function SpriteIcon({ name }: { name: string }) {
	return (
		<svg className={styles.icon} viewBox="0 0 32 32" aria-hidden="true">
			<use href={`/icons/sprite.svg#${name}`} />
		</svg>
	);
}

export default function Filter({ values, onChange, onSubmit, onClear }: FilterProps) {
	const update = (key: keyof FilterValues, value: string) =>
		onChange({ ...values, [key]: value });

	return (
		<form className={styles.filters} onSubmit={onSubmit}>
			<label className={styles.locationLabel} htmlFor="location">Location</label>
			<div className={`${styles.locationField} ${!values.location ? styles.locationFieldEmpty : ""}`}>
				<SpriteIcon name="icon-Map" />
				<input id="location" placeholder="City" value={values.location} onChange={(event) => update("location", event.target.value)} />
			</div>
			<fieldset className={styles.filterGroups}>
				<legend className={styles.filterLegend}>Filters</legend>
				<p className={styles.groupTitle}>Vehicle type</p>
				{formOptions.map(([value, label]) => (
					<label className={styles.radioLabel} key={value}>
						<input type="radio" name="form" checked={values.form === value} onChange={() => update("form", value)} />
						<span>{label}</span>
					</label>
				))}
				<p className={styles.groupTitle}>Engine</p>
				{[["diesel", "Diesel"], ["petrol", "Petrol"], ["hybrid", "Hybrid"], ["electric", "Electric"]].map(([value, label]) => (
					<label className={styles.radioLabel} key={value}>
						<input type="radio" name="engine" checked={values.engine === value} onChange={() => update("engine", value)} />
						<span>{label}</span>
					</label>
				))}
				<p className={styles.groupTitle}>Transmission</p>
				{[["automatic", "Automatic"], ["manual", "Manual"]].map(([value, label]) => (
					<label className={styles.radioLabel} key={value}>
						<input type="radio" name="transmission" checked={values.transmission === value} onChange={() => update("transmission", value)} />
						<span>{label}</span>
					</label>
				))}
			</fieldset>
			<button className={styles.searchButton} type="submit">Search</button>
			<button className={styles.clearButton} type="button" onClick={onClear}>
				<SpriteIcon name="icon-close" />
				Clear filters
			</button>
		</form>
	);
}
