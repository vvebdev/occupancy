import styles from "./switch.module.css";

interface Props {
  checked: boolean;
  onChange: () => void;
}

export const Switch = ({ checked, onChange }: Props) => {
  return (
    <button
      onClick={onChange}
      className={`${styles.switch} ${checked ? styles.off : styles.on}`}
    >
      <div className={styles.appearance}>
        <div className={styles.circle} />
      </div>
    </button>
  );
};
