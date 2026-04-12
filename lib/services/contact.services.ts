import { supabase } from "../supabase/supabase.client";
import { Contact, ContactInsert } from "../types/table.types";

export async function getAllContacts(): Promise<Contact[]> {
  const { data, error } = await supabase
    .from("contacts")
    .select("*");

  if (error) throw new Error(error.message);

  return data;
}

export async function insertContact(dataToInsert: ContactInsert): Promise<Contact> {
  const { data, error } = await supabase
    .from("contacts")
    .insert(dataToInsert)
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function getTotalContacts(): Promise<number | null> {
  const { count, error } = await supabase
    .from("contacts")
    .select("*", { count: "exact", head: true });

  if (error) throw new Error(error.message);

  return count;
}

export async function getTotalPendingContacts(): Promise<number | null> {
  const { count, error } = await supabase
    .from("contacts")
    .select("*", { count: "exact", head: true })
    .eq("status", "pending");

  if (error) throw new Error(error.message);

  return count;
}