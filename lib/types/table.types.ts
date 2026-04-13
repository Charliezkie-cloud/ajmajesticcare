import { Database } from "./database.types";

// Contact Types
export type Contact = Database["public"]["Tables"]["contacts"]["Row"];
export type ContactInsert = Database["public"]["Tables"]["contacts"]["Insert"];

// Career Types
export type Career = Database["public"]["Tables"]["careers"]["Row"];
export type CareerInsert = Database["public"]["Tables"]["careers"]["Insert"];

// Review Types
export type Review = Database["public"]["Tables"]["reviews"]["Row"];
export type ReviewInsert = Database["public"]["Tables"]["reviews"]["Insert"];