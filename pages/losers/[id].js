export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await (await res).json();

  return {
    props: { loser: data },
  };
};

const Details = ({ loser }) => {
  return (
    <div>
      <h2>{loser.name}</h2>
      <p>{loser.email}</p>
    </div>
  );
};

export default Details;
