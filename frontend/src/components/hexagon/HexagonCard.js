import styles from "./HexagonCard.module.css";
import Image from "next/image";

export default function HexagonCard({ className, source, alternative }) {
  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      <div className={styles.hexagonWrapper}>
        <div className={`${styles.hexagonBorder} group`}>
          <div className={styles.hexagon}>
            <Image
              src={source}
              alt={alternative}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
