import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      {/* Link태그에 a태그를 별도로 넣는 이유는 className 또는 style을 지정하기 위해서 */}
      <Link href="/">
        <a
          className={`${styles.link} ${
            router.pathname === "/" ? styles.active : ""
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className={`${styles.link} ${
            router.pathname === "/about" ? styles.active : ""
          }`}
        >
          About
        </a>
      </Link>
    </nav>
  );
}
