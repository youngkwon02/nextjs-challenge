import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      {/* Link태그에 a태그를 별도로 넣는 이유는 className 또는 style을 지정하기 위해서 */}
      <Link href="/">
        <a style={{ color: router.pathname === "/" ? "red" : "blue" }}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname === "/about" ? "red" : "blue" }}>
          About
        </a>
      </Link>
    </nav>
  );
}
