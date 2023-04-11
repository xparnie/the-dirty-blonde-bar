export interface EventProps {
   title: string;
   description: string;
   date: string;
   media?: MediaDataResponse;
   url?: string;
   location?: string;
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
         attributes: EventProps;
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

export interface LayoutProps {
   children: React.ReactNode;
   currentPage: string;
}

export interface CalendarProps {
   date: string;
   flip?: boolean;
}

export interface PageTitleProps {
   title: string;
}

export interface NavbarProps {
   currentPage: string;
}

export interface menuDataProps {
   title: string;
   subtitle?: string;
   items: menuItemProps[];
}

interface menuItemProps {
   name: string;
   price: number;
   description?: string;
}

export interface Route {
   title: string;
   path: string;
}

export interface Hours {
   day: string;
   time: string;
}
