import { AnimatedText } from "@/components/global/animatedText"
import { subtitles } from "@/utils/constants"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

describe("Home", () => {
	it("Should Have a text component", () => {
		const text = "Test Value"
		render(<AnimatedText text={text} />)
		const ssr = screen.getByTestId("sr-only")
		expect(ssr).toHaveTextContent(text)

		const listLetters = screen.getByTestId("span-animated-text")

		//count letters + spaces extras
		expect(listLetters.getElementsByTagName("span")).toHaveLength(
			text.length + 3,
		)
	})

	it("Should be render text component automatic with constat", () => {
		render(<AnimatedText />)
		const ssr = screen.getByTestId("sr-only")
		subtitles.map((text) => {
			expect(ssr).toHaveTextContent(text)
		})
	})
})
