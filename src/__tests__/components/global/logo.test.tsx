import Home from "@/app/page"
import { Logo } from "@/components/global/logo"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

describe("Home", () => {
	it("Should Have render a svg icon", async () => {
		render(<Logo />)
		const hasIcon = screen.getByTestId("logo")
		expect(hasIcon).toBeInTheDocument()

		const title = screen.getByTestId("title")
		expect(title).toHaveTextContent("Logo Rafael do Carmo")
	})
})
