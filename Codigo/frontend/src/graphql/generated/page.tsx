import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient , ApolloClientContext} from '../../lib/withApollo';







export async function getServerPageGetAnimals
    (options: Omit<Apollo.QueryOptions<Types.GetAnimalsQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetAnimalsQuery>({ ...options, query: Operations.GetAnimalsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetAnimals = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetAnimalsQuery, Types.GetAnimalsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetAnimalsDocument, options);
};
export type PageGetAnimalsComp = React.FC<{data?: Types.GetAnimalsQuery, error?: Apollo.ApolloError}>;
export const withPageGetAnimals = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetAnimalsQuery, Types.GetAnimalsQueryVariables>) => (WrappedComponent:PageGetAnimalsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetAnimalsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetAnimals = {
      getServerPage: getServerPageGetAnimals,
      withPage: withPageGetAnimals,
      usePage: useGetAnimals,
    }
export async function getServerPageGetDonations
    (options: Omit<Apollo.QueryOptions<Types.GetDonationsQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetDonationsQuery>({ ...options, query: Operations.GetDonationsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetDonations = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetDonationsQuery, Types.GetDonationsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetDonationsDocument, options);
};
export type PageGetDonationsComp = React.FC<{data?: Types.GetDonationsQuery, error?: Apollo.ApolloError}>;
export const withPageGetDonations = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetDonationsQuery, Types.GetDonationsQueryVariables>) => (WrappedComponent:PageGetDonationsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetDonationsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetDonations = {
      getServerPage: getServerPageGetDonations,
      withPage: withPageGetDonations,
      usePage: useGetDonations,
    }
export async function getServerPageGetEntries
    (options: Omit<Apollo.QueryOptions<Types.GetEntriesQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetEntriesQuery>({ ...options, query: Operations.GetEntriesDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetEntries = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetEntriesQuery, Types.GetEntriesQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetEntriesDocument, options);
};
export type PageGetEntriesComp = React.FC<{data?: Types.GetEntriesQuery, error?: Apollo.ApolloError}>;
export const withPageGetEntries = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetEntriesQuery, Types.GetEntriesQueryVariables>) => (WrappedComponent:PageGetEntriesComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetEntriesDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetEntries = {
      getServerPage: getServerPageGetEntries,
      withPage: withPageGetEntries,
      usePage: useGetEntries,
    }