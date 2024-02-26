"use client"

import { cn } from "@/lib/utils"
import { projects } from "@/utils/constants"
import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import { IconType } from "react-icons"
import { CiServer } from "react-icons/ci"
import { FaTerminal } from "react-icons/fa6"

import { TfiWorld } from "react-icons/tfi"
import { CardProject, CardProjectProps } from "./selected-card"

const HoverDevCards = () => {
	const [selected, setSelected] = useState("Frontend")
	const [showJobs, setShowJobs] = useState<CardProjectProps[] | null>(
		projects.filter((proj) =>
			proj.types.includes(selected.toLocaleLowerCase()),
		),
	)

	useEffect(() => {
		setShowJobs(null)

		setShowJobs(
			projects.filter((proj) =>
				proj.types.includes(selected.toLocaleLowerCase()),
			),
		)
	}, [selected])
	return (
		<>
			<motion.div
				defaultValue="Frontend"
				className="bg-transparent pt-14 flex items-center sticky top-20"
			>
				<Card
					title="Frontend"
					selected={selected === "Frontend"}
					Icon={TfiWorld}
					setSelected={setSelected}
				/>
				<Card
					title="Backend"
					selected={selected === "Backend"}
					Icon={CiServer}
					setSelected={setSelected}
				/>
				<Card
					title="CLI"
					selected={selected === "CLI"}
					Icon={FaTerminal}
					setSelected={setSelected}
				/>
			</motion.div>

			<div className="pt-20 flex flex-wrap gap-5 items-start justify-center">
				{showJobs?.slice(0, 6).map((project, key) => (
					<CardProject key={project.title} {...project} delay={key} />
				))}
			</div>
		</>
	)
}

interface CardType {
	title: string
	Icon: IconType
	selected?: boolean
	setSelected: (value: string) => void
}

const Card = ({ title, Icon, selected, setSelected }: CardType) => {
	return (
		<button
			type="button"
			title={title}
			aria-label={title}
			className={cn(
				"w-fit p-4 rounded border-[1px] overflow-hidden group flex flex-col items-center justify-center flex-1 min-w-1/4 bg-transparent text-muted-foreground ",
				{
					"bg-primary text-primary-foreground": selected,
					"hover:bg-primary-foreground": !selected,
				},
			)}
			onClick={() => setSelected(title)}
		>
			<p className="sr-only">{title}</p>
			<div className="rounded-lg p-2">
				<Icon className="text-lg " />
			</div>

			<h3 className="font-medium text-lg relative z-10 duration-300">
				{title}
			</h3>
		</button>
	)
}

export default HoverDevCards
