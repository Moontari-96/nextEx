import { API_URL } from '../app/constants'
import styles from '../../styles/movie-videos.module.css'

interface Video {
    id: string
    key: string
    name: string
}
async function getVideos(id: string) {
    console.log(`Fetching Videos: ${Date.now()}`)
    await new Promise(resolve => setTimeout(resolve, 3000))

    const response = await fetch(`${API_URL}/${id}/videos`)
    if (!response.ok) {
        throw new Error('lol something broke...')
    }

    return response.json()
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id)
    return (
        <div className={styles.container}>
            {videos.map((video: Video) => (
                <iframe
                    key={video.id}
                    src={`https://youtube.com/embed/${video.key}`}
                    title={video.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            ))}
        </div>
    )
}
