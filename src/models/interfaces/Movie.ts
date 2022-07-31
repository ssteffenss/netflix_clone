export default interface MovieInterface {
  overview: string
  backdrop_path: string | null
  poster_path: string | null
  title: string
  id: number
  videos?: {
    results: VideoInterface[]
  }
}

export interface VideoInterface {
  key: string
}

export interface SimpleMovieInterface {
  overview: string
  backdrop_path: string | null
  poster_path: string | null
  title: string
  id: number
}