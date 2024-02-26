"use client"

import { TechIcons, defaultAnimations, projectIcons } from "@/utils/constants"
import {
	AnimationControls,
	motion,
	useAnimation,
	useInView,
} from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"

import { FiGithub } from "react-icons/fi"
import { Button } from "../ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card"

export interface CardProjectProps {
	title: string
	description: string
	image: string
	repository?: string
	types: string[]
	techs: string[]
	links: {
		type: keyof typeof projectIcons
		url: string
	}[]
	delay?: number
}

const animations = {
	...defaultAnimations,
}

export function CardProject({
	title,
	description,
	repository,
	image,
	links,
	techs,
	delay = 0,
}: CardProjectProps) {
	const ref = useRef(null)
	const isInView = useInView(ref, { amount: 0.5, once: true })
	const controls = useAnimation()
	useEffect(() => {
		const show = async () => {
			await controls.start("visible", { delay: delay / 10, duration: 0.5 })
			return
		}
		if (isInView) {
			show()
			return
		}

		controls.start("hidden", { delay: 0, duration: 0.1 })
	}, [isInView, controls, delay])
	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={animations}
		>
			<Card className="w-[380px] shadow-white shadow-lg">
				<CardHeader>
					<CardTitle className="relative">
						<div>
							<img
								loading="lazy"
								width="350px"
								height="150px"
								src={image}
								alt={title}
							/>
						</div>
						{repository && (
							<Link
								href={repository}
								className="absolute top-2 right-2 text-foreground "
								target="_blank"
								rel="noreferrer"
							>
								<Button
									type="button"
									variant="ghost"
									className="border border-primary hover:border-transparent bg-muted backdrop-blur"
									title="Repositório"
								>
									<FiGithub size={20} />
								</Button>
							</Link>
						)}
					</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-5">
					<CardTitle className="flex flex-col items-center justify-center gap-5">
						{title}
					</CardTitle>
					<CardDescription className="px-5 pt-3">{description}</CardDescription>

					<span className="font-semibold">Tecnologias utilziadas</span>
					<div className="grid grid-cols-2 gap-1">
						{techs.map((tech) => (
							<div
								key={`${tech}-${title}`}
								className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
							>
								<div className="space-y-1 flex items-center">
									<div className="mr-2 h-4 w-4 text-foreground text-lg">
										{TechIcons[tech as keyof typeof TechIcons]}
									</div>
									<p className="text-sm font-medium leading-none cursor-default">
										{tech}
									</p>
								</div>
							</div>
						))}
					</div>
				</CardContent>
				<CardFooter className="flex items-center justify-end">
					{links.map((link) => (
						<Link href={link.url} target="_blank" rel="noreferrer">
							<Button type="button" variant="ghost">
								{projectIcons[link.type]}
							</Button>
						</Link>
					))}
				</CardFooter>
			</Card>
		</motion.div>
	)
}
