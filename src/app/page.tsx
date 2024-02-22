import { MouseTrackImages } from "@/components/global/animate-bg"
import { AnimatedSocialButtons } from "@/components/global/animatedSocialButtons"
import { AnimatedText } from "@/components/global/animatedText"
import { CurveDivisor } from "@/components/global/curve-divisor"
import { Header } from "@/components/global/header"
import { HeroProgramming } from "@/components/icons/HeroCover"
import { Button } from "@/components/ui/button"
import { FiGithub } from "react-icons/fi"

export default function Home() {
	return (
		<main className="overflow-x-hidden">
			<Header />

			<section className="container mx-auto pt-24 h-[90vh] grid grid-cols-2 place-items-center">
				<div className="pespective flex flex-col gap-5">
					<AnimatedText
						el="h1"
						className="text-7xl font-bold"
						once
						text="Rafael do Carmo"
					/>

					<h2 className="pl-2">
						<AnimatedText
							el="span"
							className="text-4xl font-semibold"
							once
							repeatDelay={5000}
						/>
					</h2>
					<AnimatedSocialButtons />
				</div>
				<div className="pespective-reverse max-w-lg stroke-blackground ">
					<HeroProgramming className="text-black" />
				</div>
			</section>
			<section className="container mx-auto h-screen">
				<CurveDivisor />
				<div className="flex items-center justify-center w-full">
					<AnimatedText
						el="h3"
						className="text-5xl font-bold"
						once
						text="Sobre Mim"
					/>
				</div>
			</section>
		</main>
	)
}
