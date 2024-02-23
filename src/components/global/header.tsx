import Link from "next/link"
import { Logo } from "./logo"
import { AnimatedHamburgerButton } from "./navbarMenu"
import ToggleTheme from "./toggle"

export function Header() {
	return (
		<header className="fixed w-screen z-30 bg-background">
			<div className="container mx-auto relative  flex items-center justify-between py-2 h-14">
				<aside className="max-w-48 flex h-full items-center py-2">
					<Logo width={150} height={30} />
				</aside>
				<nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
					<ul className="flex items-center justify-center gap-8">
						<Link href={"#home"}>Home</Link>
						<Link href={"#services"}>Serviços</Link>
						<Link href={"#projects"}>Projetos</Link>
						<Link href={"#contact"}>Contato</Link>
					</ul>
				</nav>
				<aside className="hidden md:flex gap-2 items-center">
					<ToggleTheme />
				</aside>
				<aside className="md:hidden flex">
					<AnimatedHamburgerButton />
				</aside>
			</div>
		</header>
	)
}
