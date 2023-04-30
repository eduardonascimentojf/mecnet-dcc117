/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { createContext, ReactNode, useState } from "react";

export type User = {
	id: number;
	name: string;
	email: string;
	user: string;
	password: string;
	isAdm: boolean;
};

type AuthContextData = {
	user: User | null;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
	signOut: () => void;
};

export const AuthContext = createContext({} as AuthContextData);

type AuthProvider = {
	children: ReactNode;
};

export function AuthProvider(props: AuthProvider) {
	const [user, setUser] = useState<User | null>(null);
	function signOut() {
		setUser(null);
	}

	return (
		<AuthContext.Provider value={{ user, setUser, signOut }}>
			{props.children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => React.useContext(AuthContext);
