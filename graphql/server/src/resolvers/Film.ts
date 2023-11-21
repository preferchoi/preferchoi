import { Query, Resolver, FieldResolver, Root } from "type-graphql";
import ghibilData from "../data/ghibli";
import { Film } from "../entities/Film";
import { Director } from "../entities/director";

@Resolver(Film)
export class FilmResolver {
  @Query(() => [Film])
  films(): Film[] {
    return ghibilData.films;
  }
  
  @FieldResolver(() => Director)
  director(@Root() parentFilm: Film): Director | undefined {
    return ghibilData.directors.find((dr) => dr.id === parentFilm.director_id);
  }
  
}