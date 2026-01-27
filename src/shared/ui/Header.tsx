import Link from "next/link";
import Image from "next/image";
import { jetBrainsMono } from "../config";

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
        <Link href="https://github.com/oleksandryalovyi">Github</Link>
        <Link href="linkedin.com/in/oleksandr-yalovyi-3ba6a1186">LinkedIn</Link>
      </div>
    </header>
  );
}
