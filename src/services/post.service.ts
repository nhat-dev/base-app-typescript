import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface PostType {
  id: Number;
  title: String;
}

interface PostProps {
  items: PostType[];
}

type QueryArg = void;

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({baseUrl: '/'}),
  endpoints: builder => ({
    getPosts: builder.query<PostProps, QueryArg>({
      query: () => ({url: `api/post`}),
    }),
  }),
});

export const {useGetPostsQuery} = postApi;
