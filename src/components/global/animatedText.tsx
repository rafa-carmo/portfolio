"use client"
import { subtitles } from "@/utils/constants"
import { Variant, motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

type AnimatedTextProps = {
	text?: string
	el?: keyof JSX.IntrinsicElements
	className?: string
	once?: boolean
	repeatDelay?: number
	animation?: {
		hidden: Variant
		visible: Variant
	}
}

const defaultAnimations = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.1,
		},
	},
}

export const AnimatedText = ({
	text = subtitles[0],
	el: Wrapper = "p",
	className,
	once,
	repeatDelay,
	animation = defaultAnimations,
}: AnimatedTextProps) => {
	const controls = useAnimation()

	const [indexText, setIndexText] = useState(0)
	const [actualText, setActualText] = useState(text)
	const ref = useRef(null)
	const isInView = useInView(ref, { amount: 0.5, once })

	//biome-ignore lint:
	useEffect(() => {
		// let timeout: NodeJS.Timeout

		const changeText = async () => {
			await controls.start("hidden")
			setIndexText(indexText + 1)
			if (indexText >= subtitles.length - 1) {
				setActualText(subtitles[0])
				setIndexText(0)
				return
			}
			setActualText(subtitles[indexText + 1])
		}
		const show = () => {
			function timeout() {
				setTimeout(async () => {
					await changeText()
					await controls.start("visible")
				}, repeatDelay)
			}
			controls.start("visible")
			if (repeatDelay) {
				timeout()
			}
			//@ts-ignore
			clearTimeout(timeout)
		}

		if (isInView) {
			show()
		} else {
			controls.start("hidden")
		}

		return
	}, [isInView, actualText, indexText])

	return (
		<Wrapper className={className}>
			<span className="sr-only">{subtitles.join(" ")}</span>
			<motion.span
				ref={ref}
				initial="hidden"
				animate={controls}
				variants={{
					visible: { transition: { staggerChildren: 0.05 } },
					hidden: {},
				}}
				aria-hidden
			>
				<span className="block">
					{actualText.split(" ").map((word, wordIndex) => (
						// biome-ignore lint:
						<span className="inline-block" key={`${word}-${wordIndex}`}>
							{word.split("").map((char, charIndex) => (
								<motion.span
									// biome-ignore lint:
									key={`${char}-${charIndex}`}
									className="inline-block"
									variants={animation}
								>
									{char}
								</motion.span>
							))}
							<span className="inline-block">&nbsp;</span>
						</span>
					))}
				</span>
			</motion.span>
		</Wrapper>
	)
}
