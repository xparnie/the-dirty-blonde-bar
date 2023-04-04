import { fetcher } from "@/lib/api";
import useSWR from "swr";

export default async function useEvents() {
   const url = `${process.env.PUBLIC_STRAPI_URL}/events`;
   const { data, error, isLoading, mutate } = await useSWR(url, fetcher);

   return {
      data,
      error,
      isLoading,
      mutate,
   };
}
