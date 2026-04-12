import { supabase } from "../supabase/supabase.client";
import { Career, CareerInsert } from "../types/table.types";

// ========== GET ALL CAREERS ==========
export async function getAllCareers(): Promise<Career[]> {
  const { data, error } = await supabase
    .from("careers")
    .select("*");

  if (error) throw new Error(error.message);

  return data;
}

// ========== GET RECENT CAREERS ==========
export async function getRecentCareers(): Promise<Career[]> {
  const { data, error } = await supabase
    .from("careers")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(10);

  if (error) throw new Error(error.message);

  return data;
}

// ========== INSERT CAREER ==========
export async function insertCareer(dataToInsert: CareerInsert): Promise<boolean> {
  const { error } = await supabase
    .from("careers")
    .insert(dataToInsert);

  if (error) throw new Error(error.message);

  return true;
}

// ========== GET TOTAL CAREERS ==========
export async function getTotalCareers(): Promise<number | null> {
  const { count, error } = await supabase
    .from("careers")
    .select("*", { count: "exact", head: true });

  if (error) throw new Error(error.message);

  return count;
}