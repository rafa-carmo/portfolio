"use client"
import { cn } from "@/lib/utils"
import { useMenu } from "@/providers/menu-provider"
import { menuItems } from "@/utils/constants"
import { stagger, useAnimate } from "framer-motion"
import Link from "next/link"
import { useEffect } from "react"
import { Button } from "../ui/button"
import { Logo } from "./logo"
import ToggleTheme from "./toggle"

function useMenuAnimation(isOpen: boolean) {
	const [scope, animate] = useAnimate()

	//biome-ignore lint:
	useEffect(() => {
		const menuAnimations = isOpen
			? [
					[
						"nav",
						{ transform: "translateX(0%)" },
						{ ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
					],
					[
						"li",
						{ transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
						{ delay: stagger(0.05), at: "-0.1" },
					],
			  ]
			: [
					[
						"li",
						{ transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
						{ delay: stagger(0.05, { from: "last" }), at: "<" },
					],
					["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
			  ]

		animate([
			[
				"path.top",
				{ d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
				{ at: "<" },
			],
			["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
			[
				"path.bottom",
				{ d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
				{ at: "<" },
			],
			//@ts-ignore
			...menuAnimations,
		])
	}, [isOpen])

	return scope
}

export function MobileMenu() {
	const { isOpen, setOpenClose } = useMenu()
	const scope = useMenuAnimation(isOpen)
	return (
		<>
			{/* biome-ignore lint: */}
			<div
				className={cn(
					"fixed top-0 bottom-0 left-0 right-0 bg-transparent  z-30 md:hidden md:pointer-events-none transition-opacity duration-300",
					{
						"opacity-0 pointer-events-none": !isOpen,
					},
				)}
				onClick={setOpenClose}
			/>
			<div ref={scope} className="fixed top-14 bottom-0 left-0 z-40">
				<nav className="w-2/4 min-w-[300px] bg-primary-foreground h-full flex flex-col justify-around md:hidden md:pointer-events-none">
					<ul className="flex flex-col gap-16">
						{menuItems.map((item) => (
							<li key={`mobile-${item.name}`}>
								<Button
									type="button"
									variant="link"
									onClick={setOpenClose}
									className="no-underline text-4xl font-bold"
								>
									<Link href={item.href}>{item.name}</Link>
								</Button>
							</li>
						))}
					</ul>
					<div className="flex w-full justify-center">
						<ToggleTheme />
					</div>
				</nav>
			</div>
		</>
	)
}
