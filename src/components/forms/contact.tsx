"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { sendMessage } from "@/lib/queries"
import { motion, useAnimation } from "framer-motion"

import { cn } from "@/lib/utils"
import { useState } from "react"
import { FaCheck } from "react-icons/fa"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

const animations = {
	hidden: {
		opacity: 0,
		x: 200,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.1,
		},
	},
}

export function ContactForm() {
	const ContactFormSchema = z.object({
		name: z.string().min(1, "Favor Preencher o campo Nome"),
		email: z.string().email("Email Inválido"),
		message: z.string().min(1, "Favor preencher a mensagem."),
	})

	const controls = useAnimation()
	const controlsSuccess = useAnimation()
	const [disableForm, setDisableForm] = useState(false)

	const form = useForm<z.infer<typeof ContactFormSchema>>({
		mode: "onChange",
		resolver: zodResolver(ContactFormSchema),
		defaultValues: {
			name: "",
			email: "",
		},
	})
	const isLoading = form.formState.isLoading

	const handleSubmit = async (values: z.infer<typeof ContactFormSchema>) => {
		const sendedMessage = await sendMessage(values)
		if (!sendedMessage) return
		setDisableForm(true)
		controls.start("hidden")
		controlsSuccess.start("visible", { delay: 0.5, duration: 1 })
	}
	return (
		<Card className="w-3/4 shadow shadow-foreground">
			<CardHeader>
				<CardTitle> </CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(handleSubmit)}
						className="flex flex-col gap-4 items-center justify-center w-full max-w-[70rem] overflow-hidden relative"
					>
						<motion.div
							initial="hidden"
							animate={controlsSuccess}
							variants={animations}
							className="absolute top-0 bottom-0 left-0 right-0 w-full flex flex-col items-center justify-start gap-5 pointer-events-none"
						>
							<FaCheck
								size={100}
								className="rounded-full p-5 bg-lime-600 text-foreground"
							/>
							<p className="text-xl">
								Mensagem recebida, Responderei o mais rapido possível.
							</p>
						</motion.div>
						<motion.div
							initial="visible"
							animate={controls}
							variants={animations}
							className={cn(
								"w-full flex items-center justify-center flex-col px-2",
								{
									"pointer-events-none": disableForm,
								},
							)}
						>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
								<FormField
									disabled={isLoading}
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Name</FormLabel>
											<FormControl>
												<Input placeholder="Name" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									disabled={isLoading}
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input type="email" placeholder="Email" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<FormField
								disabled={isLoading}
								control={form.control}
								name="message"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormLabel>Mensagem</FormLabel>
										<FormControl>
											<Textarea
												placeholder="Deixe sua mensagem."
												className="resize-none"
												{...field}
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								className="mt-4 max-w-[300px] text-foreground"
								disabled={isLoading}
								type="submit"
							>
								Enviar Mensagem
							</Button>
						</motion.div>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}
