export interface Bookmark {
  $id: string;
  userId: string;
  mediaId: number;
  mediaType: "movie" | "tv";
  mediaPoster: string;
  mediaName: string;
}