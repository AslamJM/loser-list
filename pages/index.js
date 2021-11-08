import Head from "next/head";
import Image from "next/image";
import Link from "next/dist/client/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Loser List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
          laudantium praesentium sequi omnis, similique ea dignissimos est esse
          deleniti fuga voluptate aspernatur hic perferendis cumque nostrum
          soluta excepturi doloribus fugiat.
        </p>
        <Link href="/losers">
          <a className={styles.btn}>see loser list</a>
        </Link>
      </div>
    </>
  );
}
