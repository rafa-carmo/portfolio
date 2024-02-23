"use client"

import { contacts, socialLinks } from "@/utils/constants"
import Link from "next/link"
import { Button } from "../ui/button"
import { useToast } from "../ui/use-toast"
import { Logo } from "./logo"

export function Footer() {
	const { toast } = useToast()
	return (
		<footer className="bg-primary-foreground py-24 relative">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
				<aside className="flex flex-col justify-between text-foreground gap-10">
					<Logo width={150} height={30} />
					<p className="absolute md:static bottom-2 left-2 right-2 text-center md:text-left ">
						© 2020-present Rafael do Carmo. All Rights Reserved.
					</p>
				</aside>
				<aside className="">
					<nav className="grid grid-cols-2 md:grid-cols-4 ">
						<ul className="space-y-3">
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
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
						<ul className="space-y-3">
							<li>
								<h3 className="text-primary font-bold text-lg pb-5">Site</h3>
							</li>

							<li>
								<Link href={"#home"} title="home">
									Home
								</Link>
							</li>
							<li>
								<Link href={"#services"} title="Serviços">
									Serviços
								</Link>
							</li>
							<li>
								<Link href={"#projects"} title="Projetos">
									Projetos
								</Link>
							</li>
							<li>
								<Link href={"#contact"} title="home">
									Contato
								</Link>
							</li>
						</ul>
						<ul className="space-y-3">
							<li>
								<h3 className="text-primary font-bold text-lg pb-5">
									Contatos
								</h3>
							</li>
							{contacts.map((contact) => (
								<li key={contact.value}>
									<Button
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
