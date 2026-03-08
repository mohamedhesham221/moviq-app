import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/services/api/handleRequest";
import type { Movie } from "@/interfaces/movie";
import { MOVIE_ENDPOINTS} from "@/constants/apiRoutes";
export function useGetMovieDetails(id: number) {
    const {data,isError, isLoading} = useQuery<Movie>({
        queryKey: ['movie', id],
        queryFn: () => fetcher<Movie>(MOVIE_ENDPOINTS.DETAILS(id)),
         enabled: !!id,
         staleTime: 1000 * 60 * 5
    })
    return {movie: data, isError, isLoading}
}