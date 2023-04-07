export interface Event {
   title: string;
   description: string;
   date: string;
   media?: MediaDataResponse;
   createdAt: string;
   updatedAt: string;
   publishedAt: string;
}

export interface Pagination {
   page: number;
   pageSize: number;
   pageCount: number;
   total: number;
}

export interface PostDataResponse {
   events: [
      {
         attributes: Event;
         id: number;
      }
   ];
}

export interface MediaDataResponse {
   data?: {
      id: number;
      attributes?: {
         title: string;
         alternativeText: string;
         caption: string;
         width: number;
         height: number;
         url?: string;
      };
   };
}
