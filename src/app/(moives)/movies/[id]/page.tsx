import { API_URL } from '@/app/(home)/page'
import MovieInfo, { getMovie } from '@/components/movie-info'
import MovieVideos from '@/components/movie-videos'
import { Suspense } from 'react'

interface IParams {
    params: { id: string }
}

export async function generateMetadata({ params: { id } }: IParams) {
    const movie = await getMovie(id)
    return {
        title: movie.title,
    }
}

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

export default async function MovieDetail({ params: { id } }: IParams) {
    //const { id } = await params // params를 비동기로 처리
    // const movie = await getMovie(id)
    // const videos = await getVideos(id)
    // const [movies, videos] = await Promise.all([getMovie(id), getVideos(id)])
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
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

/* generateMetadata
메타데이터 객체(metadata) 및 generateMetadata 함수는 서버 컴포넌트에서만 지원됩니다.
동일한 경로에서 메타데이터 객체와 generateMetadata 함수를 모두 export 할 수는 없습니다.
(둘 중 하나만 사용 가능) */

/* - 아래 3개의 API를 이용해서 credits, providers, similar 페이지 추가하기
- /movies/:id/credits
- /movies/:id/providers
- /movies/:id/similar
- 스타일링하기 */
