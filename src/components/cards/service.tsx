import { Check } from "lucide-react"

import { TfiWorld } from "react-icons/tfi"

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

export type DoCardProps = {
	icon: React.ReactNode
	title: string
	description: string
	details: {
		title: string
		description: string
	}[]
}

type CardProps = DoCardProps & React.ComponentProps<typeof Card>

export function CardDemo({
	className,
	icon,
	title,
	description,
	details,
	...props
}: CardProps) {
	return (
		<Card className={cn("w-[380px]", className)} {...props}>
			<CardHeader>
				<CardTitle className="flex flex-col items-center justify-center gap-5">
					{icon}
					{title}
				</CardTitle>
				<CardDescription className="px-5 pt-3">{description}</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				<div>
					{details.map((detail) => (
						<div
							key={detail.title}
							className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
						>
							<Check className="mr-2 h-4 w-4 text-primary" />
							<div className="space-y-1">
								<p className="text-sm font-medium leading-none">
									{detail.title}
								</p>
								<p className="text-sm text-muted-foreground">
									{detail.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	)
}
