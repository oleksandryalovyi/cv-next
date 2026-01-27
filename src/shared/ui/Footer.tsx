export function Footer() {
  return (
    <footer>
      By Alex Yalovyi | {new Date().getHours().toString().padStart(2, "0")}:
      {new Date().getMinutes().toString().padStart(2, "0")}
    </footer>
  );
}
