import { Exclude, Expose, Transform } from 'class-transformer';

/**
 * @Exclude() 지정한 값을 노출 X
 * @Expose() 지정한 값을 노출 O
 * 보안이 중요한 entity의 경우 전체를 Exclude 설정 하고
 * 노출할 값들만 Expose으로 지정해 필요한 값만 노출
 */

// @Exclude()
export class Movie {
  id: number;
  title: string;

  // @Expose()
  // @Exclude()

  // @Transform(({ value }) => value.toString().toUpperCase())
  genre: string;

  // @Expose()
  // get description() {
  //   return `id: ${this.id} title: ${this.title}`;
  // }
}
