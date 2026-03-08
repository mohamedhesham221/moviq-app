import { router } from "expo-router";
export const navigateMovie = (id: number) =>
  router.push({
    pathname: `/media/movie/[id]`,
    params: { id: id },
  });
export const navigateTv = (id: number) =>
  router.push({
    pathname: `/media/tv/[id]`,
    params: { id: id },
  });