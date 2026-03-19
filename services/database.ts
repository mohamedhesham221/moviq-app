import { databases } from "./appwrite";
import { ID, Query } from "react-native-appwrite";
import { getAccount } from "./userAuth";
import { Bookmark } from "@/interfaces/bookmarks";

const DATABASE_ID = "69b60f26000bf913a631";
const BOOKMARK_COLLECTION_ID = "bookmarks";

export const addBookmark = async ({
  mediaId,
  mediaType,
  mediaPoster,
  mediaName
}: {
  mediaId: number;
  mediaType: "movie" | "tv";
  mediaPoster: string;
  mediaName?: string
}
) => {
  try {
    const user = await getAccount();
    if (!user) throw new Error("user not authenticated");

    return await databases.createDocument(
      DATABASE_ID,
      BOOKMARK_COLLECTION_ID,
      ID.unique(),
      {
        userId: user.$id,
        mediaId,
        mediaType,
        mediaPoster,
        mediaName
      },
    );
  } catch (error) {
    throw new Error(`Failed database creation: ${error}`);
  }
};

export const getBookmarks = async ():Promise<Bookmark[]> => {
  try {
    const user = await getAccount();
    if (!user) throw new Error("user not authenticated");

    const data = await databases.listDocuments(DATABASE_ID, BOOKMARK_COLLECTION_ID, [
      Query.equal("userId", user.$id),
    ]);
    return data.documents.map((doc) => ({
    $id: doc.$id,
    userId: doc.userId,
    mediaId: doc.mediaId,
    mediaType: doc.mediaType,
    mediaPoster: doc.mediaPoster,
    mediaName: doc.mediaName,
  }));
  } catch (error) {
    throw new Error(`Failed get bookmarks: ${error}`);
  }
};

export const deleteBookmark = async (documentId: string) => {
  try {
    const user = await getAccount();
    if (!user) throw new Error("User not authenticated");

    await databases.deleteDocument(
      DATABASE_ID,
      BOOKMARK_COLLECTION_ID,
      documentId,
    );
  } catch (error) {
    throw new Error(`Failed delete bookmark: ${error}`);
  }
};
