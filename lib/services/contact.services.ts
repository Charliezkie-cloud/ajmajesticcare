import { supabase } from "../supabase/supabase.client";
import { Contact, ContactInsert } from "../types/table.types";

/**
 * Get all contacts
 * @returns {Promise<Contact[]>}
 */
export async function getAllContacts(limit: number = 10): Promise<Contact[]> {
  const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);

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
 * Delete a contact by ID
 * @param {number} idToDelete 
 * @returns {Promise<Contact>}
 */
export async function deleteContactById(idToDelete: number): Promise<Contact> {
  const { data, error } = await supabase
    .from("contacts")
    .delete()
    .eq("id", idToDelete)
    .select("*")
    .single();

  if (error) throw new Error(error.message);

  return data;
}

/**
 * Mark contact as responded by ID
 * @param {number} idToMark
 * @returns {Promise<Contact>}
 */
export async function markContactAsResponded(idToMark: number): Promise<Contact> {
  const { data, error } = await supabase
    .from("contacts")
    .update({ status: "responded" })
    .eq("id", idToMark)
    .select("*")
    .single();

  if (error) throw new Error(error.message);

  return data;
}

/**
 * Mark contact as pending by ID
 * @param {number} idToMark
 * @returns {Promise<Contact>}
 */
export async function markContactAsPending(idToMark: number): Promise<Contact> {
  const { data, error } = await supabase
    .from("contacts")
    .update({ status: "pending" })
    .eq("id", idToMark)
    .select("*")
    .single();

  if (error) throw new Error(error.message);

  return data;
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