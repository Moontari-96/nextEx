import Movie from '@/components/movie'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../styles/home.module.css'
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
        <div className={styles.container}>
            {movies.map(movie => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                />
            ))}
        </div>
    )
}

// meatdata 연습
// Group Routes ()란
// 디렉터리 구조를 논리적으로 그룹화하거나 정리하면서, 해당 디렉터리 이름이 실제 URL 경로에 포함되지 않도록 설정합니다.
// 디렉터리 이름이 경로(url)에 나타나지 않습니다
