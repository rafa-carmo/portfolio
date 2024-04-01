"use client"
import { socialLinks } from "@/utils/constants"
import { motion } from "framer-motion"
import Link from "next/link"
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
							type="button"
							title={link.title}
							aria-label={link.title}
							variant="ghost"
							className="rounded-full border border-foreground py-[1.4rem] px-3"
							data-testid={link.title}
						>
							{link.icon}
						</Button>
					</Link>
				))}
			</ul>
			<Link
				href="https://onedrive.live.com/view.aspx?resid=78F371729DEC1A0E!221404&authkey=!AA9HCGddPYjDpRg"
				rel="noreferrer"
				title="Download curriculo"
			>
				<Button
					type="button"
					title="Download CV"
					aria-label="Download CV"
					className="w-fit text-white text-lg font-bold border border-transparent hover:border-primary"
				>
					Download CV
				</Button>
			</Link>
		</motion.div>
	)
}
