import type { NextPage } from "next";
import { useUser } from "@supabase/supabase-auth-helpers/react";
import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import { useEffect, useState } from "react";
import { Auth } from "@supabase/ui";

const Home: NextPage = () => {
	const { user, error } = useUser();
	const [data, setData] = useState<any[] | null>(null);
	useEffect(() => {
		async function loadData() {
			const { data } = await supabaseClient.from("test").select("*");
			setData(data);
		}
		// Only run query once user is logged in.
		if (user) loadData();
	}, [user]);

	// if (!user)
	// 	return (
	// 		<>
	// 			{error && <p>{error.message}</p>}
	// 			<Auth
	// 				// view="update_password"
	// 				supabaseClient={supabaseClient}
	// 				socialLayout="horizontal"
	// 				socialButtonSize="xlarge"
	// 			/>
	// 		</>
	// 	);

	// return (
	// 	<>
	// 		<button onClick={() => supabaseClient.auth.signOut()}>Sign out</button>
	// 		<p>user:</p>
	// 		<pre>{JSON.stringify(user, null, 2)}</pre>
	// 		<p>client-side data fetching with RLS</p>
	// 		<pre>{JSON.stringify(data, null, 2)}</pre>
	// 	</>
	// );
	return (
		<>
			<div className="container">
				<div className="column">
					<div className="row">
						<div className="row-item" id="controlls">
							<div>Login/Signup open Modal</div>
						</div>
						<div className="row-item" id="controlls">
							<div>logout</div>
							<div>userinfo</div>
							<div>delete</div>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="row">
						<div className="map row-item" id="map"></div>
					</div>
					<div className="row">
						<div className="row-item">
							show current tree infos and adopt + water input
						</div>
					</div>
					<div className="row">
						<div className="row-item" id="waterings">
							populate with waterings
						</div>
						<div className="row-item" id="adoptions">
							populate with adoptions
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
