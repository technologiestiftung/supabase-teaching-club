import { Database } from "./database-types";

export type Adoption = Database["public"]["Tables"]["adoptions"]["Row"];
export type Watering = Database["public"]["Tables"]["waterings"]["Row"];
