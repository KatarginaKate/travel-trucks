import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link className={styles.logo} href="/" aria-label="TravelTracks - головна">
      <Image
        src="/icons/logo.svg"
        alt="TravelTracks"
        width={136}
        height={16}
        priority
      />
    </Link>
  );
}
