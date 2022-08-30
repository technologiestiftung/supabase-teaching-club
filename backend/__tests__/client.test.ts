import { createClient } from "@supabase/supabase-js";
const supabase = await createClient(
	process.env.SUPABASE_URL!,
	process.env.SUPABASE_ANON_KEY!,
);

const { data, error } = await supabase.from("trees").select("*");
if (error) console.error(error);
console.info(data);
