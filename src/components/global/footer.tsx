"use client"

import { contacts, menuItems, socialLinks } from "@/utils/constants"
import Link from "next/link"
import { Button } from "../ui/button"
import { useToast } from "../ui/use-toast"
import { Logo } from "./logo"

export function Footer() {
	const { toast } = useToast()
	return (
		<footer className="bg-primary-foreground py-24 relative">
			<div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
				<aside className="flex flex-col justify-between text-foreground gap-10">
					<Logo width={150} height={30} />
					<p className="absolute md:static bottom-2 left-2 right-2 text-center md:text-left ">
						© 2020-present Rafael do Carmo. All Rights Reserved.
					</p>
				</aside>
				<aside className="">
					<nav className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-2">
						<ul className="space-y-3" data-testid="social-links">
							<li>
								<h3 className="text-primary font-bold text-lg pb-5">Links</h3>
							</li>
							{socialLinks.map((link) => (
								<li key={`footer-${link.url}`}>
									<Link
										href={link.url}
										target="_blank"
										rel="noreferrer"
										title={link.title}
										data-testId={link.url}
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
						<ul className="space-y-3" data-testId="menu-links">
							<li>
								<h3 className="text-primary font-bold text-lg pb-5">Site</h3>
							</li>
							{menuItems.map((item) => (
								<li key={`footer-${item.name}`}>
									<Link
										href={item.href}
										data-testId={item.href}
										title={item.name}
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
						<ul className="space-y-3" data-testId="contacts">
							<li>
								<h3 className="text-primary font-bold text-lg pb-5">
									Contatos
								</h3>
							</li>
							{contacts.map((contact) => (
								<li key={contact.value}>
									<Button
										data-testId={contact.value}
										onClick={() => {
											navigator.clipboard.writeText(contact.value)
											toast({
												title: "Copiado para área de transferência",
											})
										}}
										variant="link"
										title={contact.value}
										className="flex gap-5 text-foreground"
									>
										{contact.icon} {contact.value}
									</Button>
								</li>
							))}
						</ul>
					</nav>
				</aside>
			</div>
		</footer>
	)
}
