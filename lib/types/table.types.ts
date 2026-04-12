import { Database } from "./database.types";

// CONTACT TYPES
export type Contact = Database["public"]["Tables"]["contacts"]["Row"];
export type ContactInsert = Database["public"]["Tables"]["contacts"]["Insert"];

// CAREER TYPES
export type Career = Database["public"]["Tables"]["careers"]["Row"];
export type CareerInsert = Database["public"]["Tables"]["careers"]["Insert"];