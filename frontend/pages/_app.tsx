import "../styles/globals.css";
import { UserProvider } from "@supabase/supabase-auth-helpers/react";
import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main className={"dark"}>
			<UserProvider supabaseClient={supabaseClient}>
				<Component {...pageProps} />
			</UserProvider>
		</main>
	);
}
