import {
  IsNotEmpty,
  IsOptional,
  registerDecorator,
  Validate,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint()
class PasswordValidator implements ValidatorConstraintInterface {
  validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> | boolean {
    // 비밀번호 길이는 4-8
    return value.length > 4 && value.length < 8;
  }
  defaultMessage?(validationArguments?: ValidationArguments): string {
    return '비밀번호의 길이는 4~8자 여야합니다. 입력된 비밀번호 : ($value)';
  }
}

function IsPasswordValid(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: PasswordValidator,
    });
  };
}

export class UpdateMovieDto {
  @IsNotEmpty()
  @IsOptional()
  title?: string;

  @IsNotEmpty()
  @IsOptional()
  genre?: string;

  // null || undefined check
  // @IsDefined()

  // 값이 정의가 안되어 있으면 다른 validator를 실행하지 않음
  // @IsOptional()

  // 지정한 값만 넣을 수 있음
  // @Equals('test')
  // @Equals('test', { message: '입력은 test만 가능' })

  // 지정한 값을 넣을 수 없음
  // @NotEquals('test')

  // null || undefined || '' 만 입력 가능
  // @IsEmpty()

  // @IsNotEmpty()

  // 지정한 값만 넣을 수 있음
  // @IsIn(['action', 'fantasy'])

  // 지정한 값은 넣을 수 없음
  // @IsNotIn(['action', 'fantasy'])

  // 타입 validator
  // @IsBoolean()
  // @IsString()
  // @IsNumber()
  // @IsInt()
  // @IsArray()
  // @IsEnum(MovieGenre)
  // @IsDate()
  // @IsDateString()

  // 숫자 validator
  // 값으로 나눠지는지
  // @IsDivisibleBy(5)

  // 양수인지
  // @IsPositive()

  // 음수인지
  // @IsNegative()

  // @Min(100)
  // @Max(100)

  // 문자 validator

  // 포함 여부
  // @Contains('test')
  // @NotContains('test')

  // 알파벳과 숫자로 이루어진건지
  // @IsAlphanumeric()

  // 실제 존재하는 카드의 숫자가 입력된 건지
  // 5312-1234-1234-1234
  // @IsCreditCard()

  // hex color 의 값인지 판단
  // @IsHexColor()

  // @MaxLength(16)
  // @MinLength(5)

  // @IsUUID()

  // 위도, 경도
  // @IsLatLong()

  // @Validate(PasswordValidator)

  // @IsPasswordValid()
  test: string;
}
