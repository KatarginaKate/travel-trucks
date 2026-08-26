import CamperCard from "../CamperCard/CamperCard";
import type { Camper } from "../../types/camper";
import styles from "./CamperList.module.css";

type CamperListProps = { campers: Camper[] };

export default function CamperList({ campers }: CamperListProps) {
	return (
		<div className={styles.camperList}>
			{campers.map((camper) => <CamperCard camper={camper} key={camper.id} />)}
		</div>
	);
}
