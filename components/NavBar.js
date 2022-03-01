import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      {/* Link태그에 a태그를 별도로 넣는 이유는 className 또는 style을 지정하기 위해서 */}
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}
