import { AnimatedSocialButtons } from "@/components/global/animatedSocialButtons"
import { socialLinks } from "@/utils/constants"

import { render, screen } from "@testing-library/react"

describe("Home", () => {
	it("Should Have list of buttons", async () => {
		render(<AnimatedSocialButtons />)

		const list = screen.getByRole("list")
		expect(list.childNodes).toHaveLength(socialLinks.length)

		socialLinks.map((link, index) => {
			expect(list.childNodes[index]).toHaveAttribute("href", link.url)
			expect(list.childNodes[index]).toHaveAttribute("title", link.title)

			const button = screen.getByTestId(link.title)
		})
	})
})
