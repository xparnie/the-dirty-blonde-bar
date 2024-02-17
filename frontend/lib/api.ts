export async function fetcher<JSON = any>(url: string): Promise<JSON> {
   try {
      const res = await fetch(url);
      if (!res.ok) {
         throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      return data;
   } catch (error) {
      console.error(`There was a problem fetching the data: ${error.message}`);
      throw error;
   }
}
