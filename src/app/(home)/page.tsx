import Movie from '@/components/movie'
import { API_URL } from '../constants'
import styles from '../../../styles/home.module.css'

interface Movie {
    id: string
    poster_path: string
    title: string
}

export const metadata = {
    title: 'Home',
}

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
            {movies.map((movie: Movie) => (
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
