"use client"

import { cn } from "@/lib/utils"
import { projects } from "@/utils/constants"
import { motion, useAnimation } from "framer-motion"
import React, { useState } from "react"
import { IconType } from "react-icons"
import { CiServer } from "react-icons/ci"
import { FaTerminal } from "react-icons/fa6"
import { FiMail } from "react-icons/fi"

import { TfiWorld } from "react-icons/tfi"
import { CardProject } from "./selected-card"

const HoverDevCards = () => {
	const [selected, setSelected] = useState("Frontend")
	const controls = useAnimation()

	const handleChange = async (key: string) => {
		// await controls.start("hidden")
		setSelected(key)
	}
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
					setSelected={handleChange}
				/>
				<Card
					title="Backend"
					selected={selected === "Backend"}
					Icon={CiServer}
					setSelected={handleChange}
				/>
				<Card
					title="CLI"
					selected={selected === "CLI"}
					Icon={FaTerminal}
					setSelected={handleChange}
				/>
			</motion.div>

			<div className="pt-20 flex flex-wrap gap-5 items-start justify-center">
				{projects
					.filter((proj) => proj.types.includes(selected.toLocaleLowerCase()))
					.slice(0, 6)
					.map((project, key) => (
						<CardProject
							key={project.title}
							{...project}
							delay={key}
							controls={controls}
						/>
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
			className={cn(
				"w-fit p-4 rounded border-[1px] overflow-hidden group flex flex-col items-center justify-center flex-1 min-w-1/4 text-muted-foreground ",
				{
					"bg-primary text-foregrond": selected,
					"hover:bg-primary-foreground": !selected,
				},
			)}
			onClick={() => setSelected(title)}
		>
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
