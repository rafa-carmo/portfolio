import { CardProjectProps } from "@/components/cards/selected-card"
import { DoCardProps } from "@/components/cards/service"
import { LinkedinIcon } from "lucide-react"
import { CiMail } from "react-icons/ci"
import { DiJavascript1 } from "react-icons/di"
import { FaServer, FaWhatsapp } from "react-icons/fa"
import { FaPython } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import { TbBrandTypescript } from "react-icons/tb"
import { TbBrandNextjs } from "react-icons/tb"
import { TfiWorld } from "react-icons/tfi"
import { TiHtml5 } from "react-icons/ti"

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
		description: "Gerenciamento e configuração de servidores linux",
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

export const projects: CardProjectProps[] = [
	{
		title: "Website Builder",
		description: "SaaS para construção de websites e gerenciamento de clientes",
		repository: "https://github.com/rafa-carmo/website-builder",
		image: "/assets/jobs/website-builder.webp",
		types: ["frontend"],
		techs: ["typescript"],
		links: [
			{
				type: "github",
				url: "https://github.com/rafa-carmo/website-builder",
			},
		],
	},
	{
		title: "Mini-Games",
		description: "Mini Games para rodar diretamente no navegador",
		repository: "https://github.com/rafa-carmo/mini-games",
		image: "/assets/jobs/mini-games.webp",
		types: ["frontend"],
		techs: ["javascript", "HTML"],
		links: [
			{
				type: "github",
				url: "https://github.com/rafa-carmo/mini-games",
			},
		],
	},
	{
		title: "Bot Discord Documentação",
		description: "Bot de discord para mapear dados dd documentações",
		repository: "https://github.com/rafa-carmo/mini-games",
		image: "/assets/jobs/discord-bot.webp",
		types: ["backend"],
		techs: ["nodejs"],
		links: [
			{
				type: "github",
				url: "https://github.com/rafa-carmo/mini-games",
			},
		],
	},
	{
		title: "Notas Musicais",
		description: "CLI em python para tons e notas musicais",
		repository: "https://github.com/rafa-carmo/notas-musicais",
		image: "/assets/jobs/notas-musicais.webp",
		types: ["cli"],
		techs: ["python"],
		links: [
			{
				type: "github",
				url: "https://github.com/rafa-carmo/notas-musicais",
			},
		],
	},
	{
		title: "Manga System",
		description: "Sistema para leitura de mangas, armazenamento e notificações",
		repository: "https://github.com/rafa-carmo/Manga-Page",
		image: "/assets/jobs/discord-bot.webp",
		types: ["frontend", "backend", "cli"],
		techs: ["typescript", "nodejs", "nextjs", "python"],
		links: [
			{
				type: "github",
				url: "https://github.com/rafa-carmo/Manga-Page",
			},
		],
	},
	{
		title: "Gerenciador de Senhas",
		description: "Gerenciador, Organizador e criador de senhas seguras",
		repository: "https://github.com/rafa-carmo/Password-Manager/",
		image: "/assets/jobs/discord-bot.webp",
		types: ["frontend"],
		techs: ["typescript", "nextjs"],
		links: [
			{
				type: "github",
				url: "https://github.com/rafa-carmo/Password-Manager/",
			},
		],
	},
	{
		title: "Loja de Jogos",
		description: "Loja de jogos digitais para pc",
		repository: "https://github.com/rafa-carmo/won-games",
		image: "/assets/jobs/won-games.webp",
		types: ["frontend", "backend"],
		techs: ["typescript", "nextjs"],
		links: [
			{
				type: "github",
				url: "https://github.com/rafa-carmo/won-games",
			},
		],
	},
]

export const projectIcons = {
	github: <FiGithub />,
}

export const TechIcons = {
	javascript: <DiJavascript1 />,
	typescript: <TbBrandTypescript />,
	HTML: <TiHtml5 />,
	python: <FaPython />,
	nodejs: <FaNodeJs />,
	nextjs: <TbBrandNextjs />,
}

export const defaultAnimations = {
	hidden: {
		opacity: 0,
		x: -200,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.1,
		},
	},
}

export const contacts = [
	{
		icon: <CiMail size={32} />,
		value: "rafaelcarmo143@gmail.com",
	},
	{
		icon: <FaWhatsapp size={32} />,
		value: "(21) 9 99554-0043",
	},
]
