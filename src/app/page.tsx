import { CardDemo } from "@/components/cards/service"
import { AnimatedSocialButtons } from "@/components/global/animatedSocialButtons"
import { AnimatedText } from "@/components/global/animatedText"
import { CurveDivisor } from "@/components/global/curve-divisor"
import { Header } from "@/components/global/header"
import { HeroProgramming } from "@/components/icons/HeroCover"
import { whatIDo } from "@/utils/constants"

export default function Home() {
	return (
		<main className="overflow-x-hidden">
			<Header />

			<section className="container mx-auto pt-24 h-[90vh] grid md:grid-cols-2 place-items-center relative">
				<div className="pespective flex flex-col gap-5 relative z-0">
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
				<div className="absolute md:static pespective-reverse max-w-lg stroke-blackground -z-10 opacity-30 md:opacity-100">
					<HeroProgramming className="text-black" />
				</div>
			</section>
			<section className="container mx-auto">
				<CurveDivisor />

				<div className="flex items-center justify-center w-full">
					<AnimatedText
						el="h3"
						className="text-5xl font-bold"
						once
						text="O Que faço?"
					/>
				</div>

				<div className="pt-20 flex flex-wrap items-start justify-center gap-10">
					{whatIDo.map((item) => (
						<CardDemo key={`${item.title}-${item.description}`} {...item} />
					))}
				</div>
			</section>
		</main>
	)
}
