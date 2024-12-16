import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
    title: 'Home',
}
export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies'

async function getMovies() {
    await new Promise(resolve => setTimeout(resolve, 1000))
    const response = await fetch(API_URL)
    const json = response.json()
    return json
}
export default async function HomePage() {
    const movies = await getMovies()
    return (
        <div>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </div>
    )
}

// meatdata 연습
// Group Routes ()란
// 디렉터리 구조를 논리적으로 그룹화하거나 정리하면서, 해당 디렉터리 이름이 실제 URL 경로에 포함되지 않도록 설정합니다.
// 디렉터리 이름이 경로(url)에 나타나지 않습니다
