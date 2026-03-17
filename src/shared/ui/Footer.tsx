import { getTimeStr } from "../lib/getTimeStr";

export function Footer() {
  return <footer>By Alex Yalovyi | {getTimeStr(new Date())}</footer>;
}
