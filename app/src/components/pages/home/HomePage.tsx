import ResponsiveContainer from "src/components/ResponsiveContainer";
import styles from "@/css/pages/home/HomePage.module.css";

export default function HomePage(): JSX.Element {
  return (
    <ResponsiveContainer>
      <div className={styles.container}>Hi</div>
    </ResponsiveContainer>
  );
}
