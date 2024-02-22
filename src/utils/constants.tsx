import { DoCardProps } from "@/components/cards/service"
import { LinkedinIcon } from "lucide-react"
import { FaServer } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import { TfiWorld } from "react-icons/tfi"

export const subtitles = [
	"Desenvolvedor Web",
	"Desenvolvedor frontend",
	"Desenvolvedor Backend",
]

export const socialLinks = [
	{
		icon: <FiGithub size={25} />,
		url: "https://github.com/rafa-carmo",
		title: "Github",
	},
	{
		icon: <LinkedinIcon size={25} />,
		url: "https://www.linkedin.com/in/rafael-do-carmo-web-developer/",
		title: "Linkedin",
	},
]

export const whatIDo: DoCardProps[] = [
	{
		title: "Desenvolvimento Web",
		icon: <TfiWorld size={50} className="text-primary opacity-75" />,
		description:
			"Desenvolvimento de site personalizados, com foco em atender às necessidades únicas de cada negocio.",
		details: [
			{
				title: "HTML Acessivel",
				description: "Torne o código mais fácil de ser lido e entendido.",
			},
			{
				title: "Otimizado para motores de busca.",
				description: "Faça o google te recomendar",
			},
			{
				title: "Codigo Semântico.",
				description:
					"Fazendo seu site ser facilmente entendido pelos navegadores deixando assim mais rapido e facil de ser entendido.",
			},
		],
	},
	{
		title: "Server Manager",
		icon: <FaServer size={50} className="text-primary opacity-75" />,
		description: "Manipulação e configuração de servidores linux",
		details: [
			{
				title: "Docker",
				description: "Configuração e gerenciamento de containers docker.",
			},
			{
				title: "Linux",
				description:
					"Configuração de firewall, serviços e gerenciamento de servidores.",
			},
		],
	},
]
