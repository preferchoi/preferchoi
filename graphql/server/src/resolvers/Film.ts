import {
  Query,
  Resolver,
  FieldResolver,
  Root,
  ObjectType,
  Field,
  Int,
  Arg,
} from 'type-graphql';
import ghibliData from '../data/ghibli';
import { Film } from '../entities/Film';
import { Director } from '../entities/Director';

@ObjectType()
class PaginatedFilms {
  @Field(() => [Film])
  films: Film[];

  @Field(() => Int, { nullable: true })
  cursor?: Film['id'] | null;
}

@Resolver(Film)
export class FilmResolver {
  @Query(() => PaginatedFilms)
  films(
    @Arg('limit', () => Int, { nullable: true, defaultValue: 6 }) limit: number,
    @Arg('cursor', () => Int, { nullable: true, defaultValue: 1 })
    cursor: Film['id'],
  ): PaginatedFilms {
    const realLimit = Math.min(6, limit);

    if (!cursor) return { films: [] };

    const cursorDataIndex = ghibliData.films.findIndex((f) => f.id === cursor);

    if (cursorDataIndex === -1) return { films: [] };

    const result = ghibliData.films.slice(
      cursorDataIndex,
      cursorDataIndex + realLimit,
    );

    const nextCursor = result[result.length - 1].id + 1;
    const hasNext = ghibliData.films.findIndex((f) => f.id === nextCursor) > -1;

    return {
      cursor: hasNext ? nextCursor : null,
      films: result,
    };
  }
  @FieldResolver(() => Director)
  director(@Root() parentFilm: Film): Director | undefined {
    return ghibliData.directors.find((dr) => dr.id === parentFilm.director_id);
  }

  // 단일 영화 상세 정보
  @Query(() => Film, { nullable: true })
  film(@Arg('filmId', () => Int) filmId: number): Film | undefined {
    return ghibliData.films.find((x) => x.id === filmId);
  }
}
