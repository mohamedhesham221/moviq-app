import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/services/api/handleRequest";
import type { Tv } from "@/interfaces/tv";
import { MOVIE_ENDPOINTS} from "@/constants/apiRoutes";
export function useGetMovieDetails(id: number) {
    const {data,isError, isLoading} = useQuery<Tv>({
        queryKey: ['movie', id],
        queryFn: () => fetcher<Tv>(MOVIE_ENDPOINTS.DETAILS(id))
    })
    const tv = data || []
    return {tv,isError, isLoading}
}