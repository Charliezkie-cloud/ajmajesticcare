import { supabase } from "../supabase/supabase.client";
import { Contact, ContactInsert } from "../types/table.types";

// ========== GET TOTAL CONTACTS ==========
export async function getAllContacts(): Promise<Contact[]> {
  const { data, error } = await supabase
    .from("contacts")
    .select("*");

  if (error) throw new Error(error.message);

  return data;
}

// ========== GET RECENT CONTACTS ==========
export async function getRecentContacts(): Promise<Contact[]> {
  const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(10);

  if (error) throw new Error(error.message);

  return data;
}

// ========== INSERT CONTACT ==========
export async function insertContact(dataToInsert: ContactInsert): Promise<boolean> {
  const { error } = await supabase
    .from("contacts")
    .insert(dataToInsert);

  if (error) throw new Error(error.message);

  return true;
}

// ========== GET TOTAL CONTACTS ==========
export async function getTotalContacts(): Promise<number | null> {
  const { count, error } = await supabase
    .from("contacts")
    .select("*", { count: "exact", head: true });

  if (error) throw new Error(error.message);

  return count;
}

// ========== GET TOTAL PENDING CONTACTS ==========
export async function getTotalPendingContacts(): Promise<number | null> {
  const { count, error } = await supabase
    .from("contacts")
    .select("*", { count: "exact", head: true })
    .eq("status", "pending");

  if (error) throw new Error(error.message);

  return count;
}