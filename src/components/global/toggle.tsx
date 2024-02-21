"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { FiMoon, FiSun } from "react-icons/fi"

const ToggleTheme = () => {
	const { theme, systemTheme, setTheme } = useTheme()
	const [selectedTheme, setSelectedTheme] = useState<string | undefined>()

	//biome-ignore lint:
	useEffect(() => {
		if (theme) {
			setSelectedTheme(theme)
			return
		}
		setSelectedTheme(systemTheme)
	}, [theme, selectedTheme])
	return (
		<div className="relative flex w-fit items-center rounded-full">
			{selectedTheme ? (
				<>
					<button
						type="button"
						className={`text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10 ${
							theme === "light" ? "text-white" : "text-foreground"
						}  `}
						onClick={() => {
							setTheme("light")
						}}
					>
						<FiMoon className="relative z-10 text-lg md:text-sm" />
						<span className="relative z-10">Light</span>
					</button>
					<button
						type="button"
						className={`text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10 ${
							theme === "dark" ? "text-white" : "text-foreground"
						}`}
						onClick={() => {
							setTheme("dark")
						}}
					>
						<FiSun className="relative z-10 text-lg md:text-sm" />
						<span className="relative z-10">Dark</span>
					</button>
					<div
						className={`absolute inset-0 z-0 flex ${
							selectedTheme === "dark" ? "justify-end" : "justify-start"
						}`}
					>
						<motion.span
							layout
							transition={{ type: "spring", damping: 15, stiffness: 250 }}
							className="h-full w-1/2 rounded-full bg-gradient-to-r from-primary to-primary"
						/>
					</div>
				</>
			) : (
				<></>
			)}
		</div>
	)
}

export default ToggleTheme
