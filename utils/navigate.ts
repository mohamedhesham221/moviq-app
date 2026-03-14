import { router } from "expo-router";
export const navigateMedia = (id: number, mediaType: "movie" | "tv") => {
  router.push({
    pathname: `/media/${mediaType}/[id]`,
    params: { id: String(id) },
  });
};
