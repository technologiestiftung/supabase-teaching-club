import "../styles/globals.css";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { AppProps } from "next/app";
import { Database } from "../src/common/database-types";

// import { UserProvider } from "@supabase/supabase-auth-helpers-react";
// import { supabaseClient } from "@supabase/supabase-auth-helpers-nextjs";
// import type { AppProps } from "next/app";

export default function MyApp({
	Component,
	pageProps,
}: AppProps<{ initialSession: Session }>) {
	const [supabaseClient] = useState(() =>
		createBrowserSupabaseClient<Database>(),
	);
	return (
		<SessionContextProvider
			supabaseClient={supabaseClient}
			initialSession={pageProps.initialSession}
		>
			<Component {...pageProps} />
		</SessionContextProvider>
	);
}
