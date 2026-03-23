import { BASE_URL } from "@/constants/apiRoutes";
//Generic fetch utility for TMDB API
export async function fetcher<T>(url: string): Promise<T> {
  const fullUrl = new URL(`${BASE_URL}${url}`);
  fullUrl.searchParams.append("api_key", process.env.EXPO_PUBLIC_API_KEY || "");

  try {
    const response = await fetch(fullUrl.toString());
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}
