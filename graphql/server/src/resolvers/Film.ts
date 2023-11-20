import { Query, Resolver } from "type-graphql";
import ghibilData from "../data/ghibli";
import { Film } from "../entities/Film";

@Resolver(Film)
export class FilmResolver {
  @Query(() => [Film])
  films(): Film[] {
    return ghibilData.films;
  }
}