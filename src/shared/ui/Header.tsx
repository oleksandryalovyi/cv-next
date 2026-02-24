import Link from "next/link";
import Image from "next/image";
import { jetBrainsMono, LINKS } from "../config";

export function Header() {
  return (
    <header
      className={`flex justify-between ${jetBrainsMono.className} text-[14px] mb-3 -ml-4`}
    >
      <div className="flex gap-5">
        <Image
          src="/ascii-art-text.png"
          alt="ascii-art-name"
          width={350}
          height={100}
        />
        <div className="text-gray-300 flex flex-col justify-end">
          <p>Name</p>
          <p>Location</p>
          <p>Position</p>
          <p>Editor</p>
        </div>
        <div className="text-gray-400 flex flex-col justify-end">
          <p>Oleksandr Yalovyi</p>
          <p>Katowice, Poland</p>
          <p>Senior Fullstack Developer</p>
          <p>Cursor</p>
        </div>
      </div>
      <div className="flex gap-5">
        <Link href={LINKS.GITHUB} target="_blank">
          Github
        </Link>
        <Link href={LINKS.LINKEDIN} target="_blank">
          LinkedIn
        </Link>
      </div>
    </header>
  );
}
