import Link from "next/dist/client/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFout = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-Found">
      <h2>page not found</h2>
      <p>
        go back to the
        <Link href="/">
          <a> home page</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFout;
<div className="not-Found">
  <h2>page not found</h2>
</div>;
