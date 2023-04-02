export interface Event {
    title: string
    description: string
    date: string
    createdAt: string
    updatedAt: string
    publishedAt: string
}

export interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
}

export interface PostDataResponse {
    attributes: Event
    id: number
}

export interface PostDataResponse {
    events: PostDataResponse[]
}