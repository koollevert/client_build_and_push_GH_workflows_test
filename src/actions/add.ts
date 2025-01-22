"use server";

interface AddResult {
  result: number;
}

export async function addNumbers(): Promise<AddResult> {
  const result = 1 + 19;
  return { result };
}