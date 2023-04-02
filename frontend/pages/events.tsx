import { fetcher } from "@/lib/api"
import { PostDataResponse } from "@/interfaces"
import Event from "@/components/Event"
import { SimpleGrid } from '@chakra-ui/react'

export default function Events({ events }: PostDataResponse) {

    return (
        <SimpleGrid columns={[1, null, 3]} spacing='24px'>
            {events && events.map(({ id, attributes }) => (
                <Event key={id} {...attributes} />
            ))}
        </SimpleGrid>
    )
}

export async function getServerSideProps() {
    const eventsResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/events`)

    return {
        props: {
            events: eventsResponse.data
        }
    }
}