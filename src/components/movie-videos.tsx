import { API_URL } from '@/app/(home)/page'

async function getVideos(id: string) {
    console.log(`Fetching Videos: ${Dat.now()}`)
    await new Promise(resolve => setTimeout(resolve, 3000))

    const response = await fetch(`${API_URL}/${id}/videos`)
    if (!response.ok) {
        throw new Error('lol something broke...')
    }

    return response.json()
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id)
    return <h6>{JSON.stringify(videos)}</h6>
}
