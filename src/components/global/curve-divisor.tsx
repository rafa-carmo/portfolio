"use client"

import { MouseEvent, useEffect, useRef } from "react"

export function CurveDivisor() {
	const path = useRef<SVGPathElement>(null)
	let progress = 0
	let time = Math.PI / 2
	let reqId: number | null = null
	let x = 0

	//biome-ignore lint:
	useEffect(() => {
		setPath(progress)
	}, [path])

	const setPath = (progress: number) => {
		const { innerWidth } = window
		const width = innerWidth * 0.7
		// `M0 50 0${width / 2} 50, ${width} 50`
		path.current?.setAttributeNS(
			"",
			"d",
			`M0 50 0${width * x} ${50 + progress}, ${width} 50`,
		)
	}

	const mouseManageEnter = () => {
		if (reqId) {
			window.cancelAnimationFrame(reqId)
			resetAnimation()
		}
	}

	const onMouseMove = (e: MouseEvent) => {
		const { movementY, clientX } = e
		//biome-ignore lint:
		const { left, width } = path.current!.getBoundingClientRect()
		x = (clientX - left) / width
		progress += movementY
		setPath(progress)
	}

	const learp = (x: number, y: number, a: number) => x * (1 - a) + y * a
	const onMouseLeave = () => {
		animateOut()
	}
	const animateOut = () => {
		const newProgress = progress * Math.sin(time)
		time += 0.2
		setPath(newProgress)
		progress = learp(progress, 0, 0.035)

		if (Math.abs(progress) > 0.25) {
			reqId = window.requestAnimationFrame(animateOut)
			return
		}
		resetAnimation()
	}

	const resetAnimation = () => {
		time = Math.PI / 2
		progress = 0
	}
	return (
		<div className="relative h-1 bg-transparent my-10">
			<div
				onMouseMove={onMouseMove}
				onMouseLeave={onMouseLeave}
				onMouseEnter={mouseManageEnter}
				className="h-10 relative -top-5 z-[1]"
			/>
			<svg className="w-full absolute -top-12">
				<title>Divisor</title>
				<path
					ref={path}
					className="stroke-1 stroke-primary bg-transparent"
					fill="none"
				/>
			</svg>
		</div>
	)
}
