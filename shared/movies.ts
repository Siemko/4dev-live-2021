export interface TMovie {
  id: string;
  title: string;
  director: string;
}

export type Movies = TMovie[];

export const movies: Movies = [
  { id: "1", title: "The Shawshank Redemption", director: "Frank Darabont" },
  { id: "2", title: "The Godfather", director: "Francis Ford Coppola" },
  { id: "3", title: "The Godfather: Part II", director: "Francis Ford Coppola" },
  { id: "4", title: "The Dark Knight", director: "Christopher Nolan" },
];
