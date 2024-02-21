import Link from "next/link"
import { Logo } from "./logo"
import ToggleTheme from "./toggle"

export function Header() {
	return (
		<header className="fixed w-screen">
			<div className="container mx-auto relative  flex items-center justify-between py-2">
				<aside className="max-w-48">
					<Logo width={200} height={50} />
				</aside>
				<nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
					<ul className="flex items-center justify-center gap-8">
						<Link href={"#"}>Home</Link>
						<Link href={"#"}>About</Link>
						<Link href={"#"}>Services</Link>
						<Link href={"#"}>Portfolio</Link>
					</ul>
				</nav>
				<aside className="flex gap-2 items-center">
					<ToggleTheme />
				</aside>
			</div>
		</header>
	)
}
