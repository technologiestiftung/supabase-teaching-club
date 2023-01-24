import { SupabaseClient, User } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { SetStateAction } from "react";
import { Adoption, Watering } from "../src/common/types";

export const AuthDetail = ({
	user,
	supabaseClient,
	setUserAdoptions,
	setUserWaterings,
}: {
	user: User | null;
	supabaseClient: SupabaseClient;
	setUserAdoptions: (value: SetStateAction<Adoption[]>) => void;
	setUserWaterings: (value: SetStateAction<Watering[]>) => void;
}) => {
	return (
		<details>
			<summary>{user ? "User info" : "Signup/login"}</summary>
			<div className="row">
				<div className="row-item" id="controlls">
					{!user ? (
						<Auth
							// view="update_password"
							supabaseClient={supabaseClient}
							appearance={{ theme: ThemeSupa }}
							socialLayout="horizontal"
							// socialButtonSize="small"
						/>
					) : (
						<>
							<div>
								<p>Email: {JSON.stringify(user.email, null, 2)}</p>
								<p>id: {JSON.stringify(user.id, null, 2)}</p>
								<button
									onClick={() => {
										supabaseClient.auth.signOut();
										setUserAdoptions([]);
										setUserWaterings([]);
									}}
								>
									Sign out
								</button>
							</div>
						</>
					)}
				</div>
			</div>
		</details>
	);
};
