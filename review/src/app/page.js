import Image from "next/image";
import styles from "./page.module.css";
import MainTemplate from "./components/Template/MainTemplate";

export default function Home() {
  return (
    <div className={styles.page}>
      <MainTemplate />
    </div>
  );
}
