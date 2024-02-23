"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

interface MenuProviderProps {
	children: React.ReactNode
}

type ModalContentType = {
	isOpen: boolean
	setOpenClose: () => void
}

export const MenuContext = createContext<ModalContentType>({
	isOpen: false,
	setOpenClose: () => {},
})

const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)

	const setOpenClose = () => {
		setIsOpen(!isOpen)
	}

	return (
		<MenuContext.Provider value={{ setOpenClose, isOpen }}>
			{children}
		</MenuContext.Provider>
	)
}

export const useMenu = () => {
	const context = useContext(MenuContext)
	if (!context) {
		throw new Error("Use menu must be used within the menu provider")
	}

	return context
}

export default MenuProvider
