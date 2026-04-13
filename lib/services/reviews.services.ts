import { supabase } from "../supabase/supabase.client";
import { Review, ReviewInsert } from "../types/table.types";

/**
 * Get all reviews
 * @returns {Promise<Review[]>}
 */
export async function getAllReviews(): Promise<Review[]> {
  const { data, error } = await supabase
    .from("reviews")
    .select("*")

  if (error) throw new Error(error.message);

  return data;
}

/**
 * Get all public reviews
 * @returns {Promise<Review[]>}
 */
export async function getAllPublicReviews(): Promise<Review[]> {
  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("is_public", true);

  if (error) throw new Error(error.message);

  return data;
}

/**
 * Insert review
 * @param {ReviewInsert} dataToInsert 
 * @returns {Promise<boolean>}
 */
export async function insertReview(dataToInsert: ReviewInsert): Promise<boolean> {
  const { error } = await supabase
    .from("reviews")
    .insert(dataToInsert);

  if (error) throw new Error(error.message);

  return true;
}

/**
 * Get total reviews
 * @returns {Promise<number | null>}
 */
export async function getTotalReviews(): Promise<number | null> {
  const { count, error } = await supabase
    .from("reviews")
    .select("*", { count: "exact", head: true });

  if (error) throw new Error(error.message);

  return count;
}