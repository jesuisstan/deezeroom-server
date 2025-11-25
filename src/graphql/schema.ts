// GraphQL Schema Definition (SDL)
// This file contains only the GraphQL Schema Definition Language
// TypeScript types matching this schema are in ./types.ts
import { INDEX_DEFAULT, LIMIT_DEFAULT } from '@/graphql/constants';

export const typeDefs = /* GraphQL */ `
  type Artist {
    id: ID!
    name: String!
    picture: String
    pictureSmall: String
    pictureMedium: String
    pictureBig: String
    pictureXl: String
    link: String
  }

  type Album {
    id: ID!
    title: String!
    cover: String
    coverSmall: String
    coverMedium: String
    coverBig: String
    coverXl: String
    link: String
    tracklist: String
  }

  type Track {
    id: ID!
    title: String!
    titleShort: String!
    duration: Int!
    preview: String
    explicitLyrics: Boolean!
    artist: Artist!
    album: Album!
  }

  type SearchTracksResult {
    tracks: [Track!]!
    total: Int!
    hasMore: Boolean!
  }

  type SearchArtistsResult {
    artists: [Artist!]!
    total: Int!
    hasMore: Boolean!
  }

  type Query {
    searchTracks(
      query: String!
      limit: Int = ${LIMIT_DEFAULT}
      index: Int = ${INDEX_DEFAULT}
    ): SearchTracksResult!
    getPopularTracks(
      limit: Int = ${LIMIT_DEFAULT}
      index: Int = ${INDEX_DEFAULT}
    ): SearchTracksResult!
    track(id: ID!): Track
    searchArtists(
      query: String!
      limit: Int = ${LIMIT_DEFAULT}
      index: Int = ${INDEX_DEFAULT}
    ): SearchArtistsResult!
    artistsByIds(ids: [ID!]!): [Artist!]!
  }
`;
