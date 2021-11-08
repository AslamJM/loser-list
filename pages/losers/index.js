export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { losers: data },
  };
};
import Link from "next/dist/client/link";
import styles from "../../styles/Losers.module.css";
const LosersList = ({ losers }) => {
  return (
    <div>
      <h1>list of losers</h1>
      {losers.map((loser) => (
        <Link href={`/losers/${loser.id}`} key={loser.id}>
          <a className={styles.anc}>
            <h3>{loser.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default LosersList;
