import type { Metadata } from "next"

import { Toaster } from "@/components/ui/toaster"
import MenuProvider from "@/providers/menu-provider"
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
					<MenuProvider>{children}</MenuProvider>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	)
}
