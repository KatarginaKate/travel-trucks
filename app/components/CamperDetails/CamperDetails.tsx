"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper/types";
import "swiper/css";
import "swiper/css/thumbs";
import type { Camper } from "../../types/camper";
import styles from "./CamperDetails.module.css";

function formatLabel(value: string) {
	return value.replaceAll("_", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function Feature({ label, value }: { label: string; value?: boolean }) {
	return value ? <span className={styles.feature}>{label}</span> : null;
}

function SpriteIcon({ name }: { name: string }) {
	return <svg className={styles.icon} viewBox="0 0 32 32" aria-hidden="true"><use href={`/icons/sprite.svg#${name}`} /></svg>;
}

type CamperDetailsProps = {
	camper: Camper;
	reviewsCount: number;
};

export default function CamperDetails({ camper, reviewsCount }: CamperDetailsProps) {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null);
	const images = camper.gallery?.length ? camper.gallery : [{ original: camper.coverImage, thumb: camper.coverImage }];

	return (
		<div className={styles.details}>
			<div className={styles.gallery}>
				<Swiper modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }} className={styles.mainSlider}>
					{images.map((image, index) => (
						<SwiperSlide key={`${image.original}-${index}`}>
							<Image src={image.original} alt={`${camper.name} ${index + 1}`} width={640} height={480} priority={index === 0} />
						</SwiperSlide>
					))}
				</Swiper>
				<Swiper onSwiper={setThumbsSwiper} spaceBetween={32} slidesPerView={4} watchSlidesProgress className={styles.thumbsSlider}>
					{images.map((image, index) => (
						<SwiperSlide key={`${image.thumb}-${index}`}>
							<Image src={image.thumb} alt="" width={150} height={100} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className={styles.summary}>
				<div className={styles.summaryCard}>
					<h1>{camper.name}</h1>
					<p className={styles.meta}><SpriteIcon name="icon-star" /> {camper.rating} ({reviewsCount} Reviews) · {camper.location}</p>
					<strong className={styles.price}>€{camper.price.toLocaleString("en-US")}</strong>
					<p className={styles.description}>{camper.description}</p>
				</div>
				<div className={styles.vehicleCard}>
					<h2>Vehicle details</h2>
					<div className={styles.features}>
						<Feature label="Automatic" value={camper.transmission === "automatic"} />
						<Feature label={formatLabel(camper.engine)} value />
						{camper.amenities?.map((amenity) => <Feature key={amenity} label={formatLabel(amenity)} value />)}
					</div>
					<dl className={styles.specs}>
						{["form", "length", "width", "height", "tank", "consumption"].map((key) => <div key={key}><dt>{formatLabel(key)}</dt><dd>{camper[key as keyof Camper] as string}</dd></div>)}
					</dl>
				</div>
			</div>
		</div>
	);
}
