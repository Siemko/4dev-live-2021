import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Character = {
  __typename?: 'Character';
  created?: Maybe<Scalars['String']>;
  episode: Array<Maybe<Episode>>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  name?: Maybe<Scalars['String']>;
  origin?: Maybe<Location>;
  species?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Characters = {
  __typename?: 'Characters';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Episode = {
  __typename?: 'Episode';
  air_date?: Maybe<Scalars['String']>;
  characters: Array<Maybe<Character>>;
  created?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Episodes = {
  __typename?: 'Episodes';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export type FilterCharacter = {
  gender?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  species?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type FilterEpisode = {
  episode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type FilterLocation = {
  dimension?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Info = {
  __typename?: 'Info';
  count?: Maybe<Scalars['Int']>;
  next?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
  prev?: Maybe<Scalars['Int']>;
};

export type Location = {
  __typename?: 'Location';
  created?: Maybe<Scalars['String']>;
  dimension?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  residents: Array<Maybe<Character>>;
  type?: Maybe<Scalars['String']>;
};

export type Locations = {
  __typename?: 'Locations';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type Query = {
  __typename?: 'Query';
  character?: Maybe<Character>;
  characters?: Maybe<Characters>;
  charactersByIds?: Maybe<Array<Maybe<Character>>>;
  episode?: Maybe<Episode>;
  episodes?: Maybe<Episodes>;
  episodesByIds?: Maybe<Array<Maybe<Episode>>>;
  location?: Maybe<Location>;
  locations?: Maybe<Locations>;
  locationsByIds?: Maybe<Array<Maybe<Location>>>;
};


export type QueryCharacterArgs = {
  id: Scalars['ID'];
};


export type QueryCharactersArgs = {
  filter?: Maybe<FilterCharacter>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryEpisodeArgs = {
  id: Scalars['ID'];
};


export type QueryEpisodesArgs = {
  filter?: Maybe<FilterEpisode>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryLocationArgs = {
  id: Scalars['ID'];
};


export type QueryLocationsArgs = {
  filter?: Maybe<FilterLocation>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars['ID']>;
};

export type GetCharactersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCharactersQuery = { __typename?: 'Query', characters?: { __typename?: 'Characters', results?: Array<{ __typename?: 'Character', name?: string | null | undefined, status?: string | null | undefined, species?: string | null | undefined, origin?: { __typename?: 'Location', name?: string | null | undefined, dimension?: string | null | undefined } | null | undefined, location?: { __typename?: 'Location', name?: string | null | undefined, dimension?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };


export const GetCharactersDocument = `
    query getCharacters {
  characters {
    results {
      name
      status
      species
      origin {
        name
        dimension
      }
      location {
        name
        dimension
      }
    }
  }
}
    `;
export const useGetCharactersQuery = <
      TData = GetCharactersQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: GetCharactersQueryVariables,
      options?: UseQueryOptions<GetCharactersQuery, TError, TData>
    ) =>
    useQuery<GetCharactersQuery, TError, TData>(
      variables === undefined ? ['getCharacters'] : ['getCharacters', variables],
      fetcher<GetCharactersQuery, GetCharactersQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetCharactersDocument, variables),
      options
    );