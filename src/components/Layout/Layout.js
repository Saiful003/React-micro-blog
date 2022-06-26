import Header from "../Header/Header";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className={styles.main__wrapper}>{children}</div>
        </div>
      </main>
    </>
  );
}

export default Layout;
