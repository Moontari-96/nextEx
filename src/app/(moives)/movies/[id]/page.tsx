import { API_URL } from '@/app/(home)/page'
import MovieInfo from '@/components/movie-info'
import MovieVideos from '@/components/movie-videos'
import { Suspense } from 'react'

// async function getMovie(id: string) {
//     await new Promise(resolve => setTimeout(resolve, 2000))

//     const response = await fetch(`${API_URL}/${id}`)
//     if (!response.ok) {
//         throw new Error(`Failed to fetch movie: ${response.statusText}`)
//     }
//     return response.json()
// }
// async function getVideos(id: string) {
//     await new Promise(resolve => setTimeout(resolve, 2000))

//     const response = await fetch(`${API_URL}/${id}/videos`)
//     if (!response.ok) {
//         throw new Error(`Failed to fetch video: ${response.statusText}`)
//     }
//     return response.json()
// }

export default async function MovieDetail({
    params,
}: {
    params: { id: string }
}) {
    const { id } = await params // params를 비동기로 처리
    // const movie = await getMovie(id)
    // const videos = await getVideos(id)
    // const [movies, videos] = await Promise.all([getMovie(id), getVideos(id)])
    return (
        <div>
            <h2 className="text-2xl">Movie Detail Page</h2>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <h2 className="text-xl">Videos</h2>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    )
}

// dynamic routes [] 란
// Next.js에서 URL 경로의 일부를 동적으로 설정할 수 있는 기능입니다.이를 통해 고정된 경로 대신 특정 값에 따라 라우트를 처리할 수 있습니다.
// []를 디렉터리에 감싸 동적 경로를 설정함

// async: 비동기 함수로 선언.
// 비동기 작업을 처리할 때 콜백이나 .then() 대신 await 키워드를 사용하여 코드가 동기적으로 실행되는 것처럼 작성할 수 있게 합니다.
// 비동기 함수는 항상 **Promise**를 반환합니다

// await: 비동기 작업이 완료될 때까지 기다립니다. (Promise를 풀어줌)

/* Promise.all()

Promise.all()는 자바스크립트에서 여러 비동기 작업을 동시에 실행하고, 모든 작업이 완료될 때까지 기다렸다가 결과를 배열 형태로 반환하는 함수입니다.
쉽게 말해, 여러 Promise를 모두 이행할 때까지 기다린 후, 그 결과를 한꺼번에 받아볼 수 있게 해줍니다. */
