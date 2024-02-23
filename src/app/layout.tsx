import type { Metadata } from "next"

import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/providers/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
	title: "Rafael do Carmo - Desenvolvedor Web",
	description: "Portfolio de Rafael do Carmo, Desenvolvedor de aplicações web",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR" className="" suppressHydrationWarning>
			<body className="bg-background text-base">
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	)
}
