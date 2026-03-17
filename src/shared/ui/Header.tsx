import Link from "next/link";
import Image from "next/image";
import { jetBrainsMono, LINKS } from "../config";

export function Header() {
  return (
    <header
      className={`flex justify-between ${jetBrainsMono.className} text-[12px] mb-3 -ml-4`}
    >
      <div className="flex gap-5">
        <Image
          src="/ascii-art-text.png"
          alt="ascii-art-name"
          width={450}
          height={100}
        />
        <div className="text-gray-300 flex flex-col justify-center">
          <p>Name</p>
          <p>Location</p>
          <p>Position</p>
          <p>Editor</p>
        </div>
        <div className="text-gray-400 flex flex-col justify-center">
          <p>Oleksandr Yalovyi</p>
          <p>Częstochowa, Poland</p>
          <p>Senior Fullstack Developer</p>
          <p>VSCode, Cursor</p>
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
