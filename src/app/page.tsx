import HoverDevCards from "@/components/cards/sections"
import { CardDemo } from "@/components/cards/service"
import { ContactForm } from "@/components/forms/contact"
import { AnimatedSocialButtons } from "@/components/global/animatedSocialButtons"
import { AnimatedText } from "@/components/global/animatedText"
import { CurveDivisor } from "@/components/global/curve-divisor"
import { Footer } from "@/components/global/footer"
import { Header } from "@/components/global/header"
import { MobileMenu } from "@/components/global/mobileMenu"
import { HeroProgramming } from "@/components/icons/HeroCover"
import { whatIDo } from "@/utils/constants"

export default function Home() {
	return (
		<main className="overflow-x-hidden">
			<Header />
			<MobileMenu />

			<section
				className="container mx-auto pt-24 min-h-[90vh] grid md:grid-cols-2 place-items-center relative"
				id="home"
			>
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
			<section className="container mx-auto py-20" id="services">
				<CurveDivisor />

				<div className="flex items-center justify-center w-full">
					<AnimatedText
						el="h3"
						className="text-5xl font-bold text-center"
						once
						text="O Que faço?"
					/>
				</div>

				<div className="py-20 flex flex-wrap items-start justify-center gap-10">
					{whatIDo.map((item, key) => (
						<CardDemo
							key={`${item.title}-${item.description}`}
							{...item}
							delay={key}
						/>
					))}
				</div>
			</section>

			<section className="container mx-auto min-h-screen py-20" id="projects">
				<CurveDivisor />

				<div className="flex items-center justify-center w-full">
					<AnimatedText
						el="h3"
						className="text-5xl font-bold text-center"
						once
						text="Últimos Projetos"
					/>
				</div>

				<HoverDevCards />
			</section>

			<section className="container mx-auto py-20" id="contact">
				<CurveDivisor />

				<div className="flex items-center justify-center w-full">
					<AnimatedText
						el="h3"
						className="text-5xl font-bold text-center"
						once
						text="Deixe sua mensagem"
					/>
				</div>
				<div className="flex items-center justify-center py-20">
					<ContactForm />
				</div>
			</section>

			<Footer />
		</main>
	)
}
