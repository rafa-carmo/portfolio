import { Footer } from "@/components/global/footer"
import { contacts, menuItems, socialLinks } from "@/utils/constants"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

describe("Home", () => {
	it("Should be render a footer", () => {
		render(<Footer />)
		const rights = screen.getByText(
			"© 2020-present Rafael do Carmo. All Rights Reserved.",
		)
		expect(rights).toBeInTheDocument()

		const socialLinksList = screen.getByTestId("social-links")
		expect(socialLinksList.childNodes).toHaveLength(socialLinks.length + 1)

		socialLinks.map((link) => {
			const linkComponent = screen.getByTestId(link.url)
			expect(linkComponent).toHaveAttribute("href", link.url)
			expect(linkComponent).toHaveAttribute("title", link.title)
			expect(linkComponent).toHaveTextContent(link.title)
		})

		const menuItemsList = screen.getByTestId("menu-links")
		expect(menuItemsList.childNodes).toHaveLength(menuItems.length + 1)

		menuItems.map((link) => {
			const menuLinkComponent = screen.getByTestId(link.href)
			expect(menuLinkComponent).toHaveAttribute("href", link.href)
			expect(menuLinkComponent).toHaveAttribute("title", link.name)
			expect(menuLinkComponent).toHaveTextContent(link.name)
		})

		const contactList = screen.getByTestId("contacts")
		expect(contactList.childNodes).toHaveLength(contacts.length + 1)

		contacts.map((contact) => {
			const menuLinkComponent = screen.getByTestId(contact.value)
			expect(menuLinkComponent).toHaveAttribute("title", contact.value)
			expect(menuLinkComponent).toHaveTextContent(contact.value)
		})
	})
})
