export async function fetcher<JSON = any>(url: string): Promise<JSON> {
   const res = await fetch(url);
   const data = await res.json();

   return data;
}
