import Link from "next/link";
import { NavBarMenuItems } from "./_elements/navBarMenuItems";
import { ThemeToggle } from "../ui/theme-toggle";

export default function NavBar() {
  return (
    <header className="w-full sticky top-0 z-50 flex flex-col text-sm leading-6 border-b bg-primary-foreground ">
      <div className="container flex flex-row py-4 px-4 md:px-8">
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <Link href={"/"} className="text-lg font-bold md:mr-6 md:text-2xl">
              <span>Align_</span>
            </Link>
          </div>

          <div className="flex flex-row items-center gap-4">
            <nav className="flex flex-row items-center justify-center">
              <ul className="flex flex-row items-center gap-4">
                {NavBarMenuItems.map((item, key) => (
                  <li
                    key={key}
                    className="text-sm font-semibold whitespace-nowrap transition-colors hover:text-foreground/80 text-foreground/60"
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
