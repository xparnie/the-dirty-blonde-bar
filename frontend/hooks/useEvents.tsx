import { useEffect, useState } from 'react'

export default async function useEvents() {
    const [events, setEvents] = useState([])
    const controller = new AbortController()
    const { signal } = controller

    const fetchEvents = async () => {
        try {
            const res = await fetch(`${process.env.PUBLIC_STRAPI_URL}/events`, { signal })
            const data = await res.json();
    
            setEvents(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchEvents()

        return () => controller.abort()
    }, [])

    return {
        events
    }
}