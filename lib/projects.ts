import { supabase } from "./supabase";

export async function getProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*");

  if (error) {
    throw new Error(`Failed to fetch projects: ${error.message}`);
  }

  return data;
}