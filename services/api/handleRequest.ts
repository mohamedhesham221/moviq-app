import { BASE_URL } from "@/constants/apiRoutes";

export async function fetcher<T>(url: string): Promise<T> {
  try {
    const response = await fetch(
      `${BASE_URL}${url}?api_key=${process.env.EXPO_PUBLIC_API_KEY}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}
