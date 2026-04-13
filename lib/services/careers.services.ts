import { supabase } from "../supabase/supabase.client";
import { Career, CareerInsert } from "../types/table.types";

/**
 * Get all careers
 * @returns {Promise<Career[]>}
 */
export async function getAllCareers(): Promise<Career[]> {
  const { data, error } = await supabase
    .from("careers")
    .select("*");

  if (error) throw new Error(error.message);

  return data;
}

/**
 * Get recent careers
 * @returns {Promise<Career[]>}
 */
export async function getRecentCareers(): Promise<Career[]> {
  const { data, error } = await supabase
    .from("careers")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(10);

  if (error) throw new Error(error.message);

  return data;
}

/**
 * Insert career
 * @param {CareerInsert} dataToInsert
 * @returns {Promise<boolean>}
 */
export async function insertCareer(dataToInsert: CareerInsert): Promise<boolean> {
  const { error } = await supabase
    .from("careers")
    .insert(dataToInsert);

  if (error) throw new Error(error.message);

  return true;
}

/**
 * Get total careers
 * @returns {Promise<number | null>}
 */
export async function getTotalCareers(): Promise<number | null> {
  const { count, error } = await supabase
    .from("careers")
    .select("*", { count: "exact", head: true });

  if (error) throw new Error(error.message);

  return count;
}