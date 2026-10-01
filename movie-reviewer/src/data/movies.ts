export interface Movie {
  id: number
  title: string
  year: number
  description: string
  rating: number
}

export const movies: Movie[] = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    year: 1994,
    description: 'Two imprisoned men bond over a number of years.',
    rating: 5,
  },
  {
    id: 2,
    title: 'Inception',
    year: 2010,
    description: 'A thief steals corporate secrets through dream-sharing technology.',
    rating: 4,
  },
  {
    id: 3,
    title: 'Spirited Away',
    year: 2001,
    description: 'A young girl wanders into a world ruled by gods and spirits.',
    rating: 5,
  },
]

export function getMovie(id: number): Movie | undefined {
  return movies.find((movie) => movie.id === id)
}
