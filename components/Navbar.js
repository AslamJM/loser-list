import Link from "next/link";
import Image from "next/dist/client/image";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/EMD_log.png" width="100px" height="100px" alt="logos" />
      </div>
      <div className="links">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/losers">
          <a>Loser Listing</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
