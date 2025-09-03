import Link from "next/link";

export default function Social() {
  return (
    <section>
      <h2>Social</h2>
      <div className="flex gap-1">
        <span>
          <Link href="">Github</Link>
        </span>
        <span>
          <Link href="">LinkedIn</Link>
        </span>
      </div>
    </section>
  );
}
