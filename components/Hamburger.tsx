import styles from "../styles/Hamburger.module.css";

const Hamburger = ({ openMenu }: { openMenu: any }) => {
  return (
    <div id="hamburger" className={styles.hamburger} onClick={openMenu}>
      <span className={styles.hamburger_topbun}></span>
      <span className={styles.hamburger_bottombun}></span>
    </div>
  );
};

export default Hamburger;
