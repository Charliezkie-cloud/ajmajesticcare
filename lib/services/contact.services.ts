import { supabase } from "../supabase/supabase.client";
import { Contact, ContactInsert } from "../types/table.types";

/**
 * Get all contacts
 * @returns {Promise<Contact[]>}
 */
export async function getAllContacts(): Promise<Contact[]> {
  const { data, error } = await supabase
    .from("contacts")
    .select("*");

  if (error) throw new Error(error.message);

  return data;
}

/**
 * Get recent contacts
 * @param {number} limit = 10
 * @returns {Promise<Contact[]>}
 */
export async function getRecentContacts(limit = 10): Promise<Contact[]> {
  const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw new Error(error.message);

  return data;
}

/**
 * Insert contact
 * @param {ContactInsert} dataToInsert
 * @returns {Promise<Boolean>}
 */
export async function insertContact(dataToInsert: ContactInsert): Promise<boolean> {
  const { error } = await supabase
    .from("contacts")
    .insert(dataToInsert);

  if (error) throw new Error(error.message);

  return true;
}

/**
 * Get total contacts
 * @returns {Promise<number | null>}
 */
export async function getTotalContacts(): Promise<number | null> {
  const { count, error } = await supabase
    .from("contacts")
    .select("*", { count: "exact", head: true });

  if (error) throw new Error(error.message);

  return count;
}

/**
 * Get total pending contacts
 * @returns {Promise<number | null>}
 */
export async function getTotalPendingContacts(): Promise<number | null> {
  const { count, error } = await supabase
    .from("contacts")
    .select("*", { count: "exact", head: true })
    .eq("status", "pending");

  if (error) throw new Error(error.message);

  return count;
}