"use client"
import { socialLinks } from "@/utils/constants"
import { motion } from "framer-motion"
import Link from "next/link"
import { FiGithub } from "react-icons/fi"
import { Button } from "../ui/button"

export const AnimatedSocialButtons = () => {
	return (
		<motion.div
			initial={{ x: -200, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ duration: 0.5, delay: 1 }}
			className="flex flex-col items-center justify-center pt-10 gap-5"
		>
			<ul className="flex items-center justify-center gap-5">
				{socialLinks.map((link) => (
					<Link
						key={link.url}
						href={link.url}
						target="_blank"
						rel="noreferrer"
						title={link.title}
					>
						<Button
							variant="ghost"
							className="rounded-full border border-foreground py-[1.4rem] px-3"
						>
							{link.icon}
						</Button>
					</Link>
				))}
			</ul>

			<Button className="w-fit text-white text-lg font-bold border border-transparent hover:border-primary">
				Download CV
			</Button>
		</motion.div>
	)
}
