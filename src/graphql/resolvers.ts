import { INDEX_DEFAULT, LIMIT_DEFAULT } from '@/graphql/constants';
import { deezerService } from '@/services/deezer-service';

export const resolvers = {
  Query: {
    searchTracks: async (
      _: unknown,
      args: { query: string; limit?: number; index?: number }
    ) => {
      const { query, limit = LIMIT_DEFAULT, index = INDEX_DEFAULT } = args;
      return await deezerService.searchTracks(query, limit, index);
    },
    getPopularTracks: async (
      _: unknown,
      args: { limit?: number; index?: number }
    ) => {
      const { limit = LIMIT_DEFAULT, index = INDEX_DEFAULT } = args;
      return await deezerService.getPopularTracks(limit, index);
    },
    track: async (_: unknown, args: { id: string }) => {
      const { id } = args;
      return await deezerService.getTrackById(id);
    },
    searchArtists: async (
      _: unknown,
      args: { query: string; limit?: number; index?: number }
    ) => {
      const { query, limit = LIMIT_DEFAULT, index = INDEX_DEFAULT } = args;
      return await deezerService.searchArtists(query, limit, index);
    },
    artistsByIds: async (_: unknown, args: { ids: string[] }) => {
      const { ids } = args;
      return await deezerService.getArtistsByIds(ids);
    }
  }
};
