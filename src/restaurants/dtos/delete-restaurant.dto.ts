import { CoreOutput } from './../../common/dtos/output.dto';
import { InputType, Field, ObjectType } from '@nestjs/graphql';

@InputType()
export class DeleteRestaurantInput {
  @Field((type) => Number)
  restaurantId: number;
}

@ObjectType()
export class DeleteRestaurantOutput extends CoreOutput {}