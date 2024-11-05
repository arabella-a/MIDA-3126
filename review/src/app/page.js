import Image from "next/image";
import styles from "./page.module.css";
import ArtGallery from "./components/molecules/ArtGallery";

export default function Home() {
  return (
    <div className={styles.page}>
      <ArtGallery />
    </div>
  );
}
