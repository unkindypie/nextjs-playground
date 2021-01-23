import { prop as Property, getModelForClass } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { Field, ObjectType } from 'type-graphql';
import { BaseEntity } from 'entities/BaseEntity';
import { User } from 'entities/User';
import { Ref } from 'types/Ref';

@ObjectType({ description: 'Stream embedded post content' })
export class Stream extends BaseEntity {
  // @Field()
  // readonly _id: ObjectId;
  @Field()
  @Property({ required: true })
  title: string;

  @Field()
  @Property({ required: true })
  description: string;

  @Field()
  @Property({ required: true })
  url: string;

  @Field(() => User)
  @Property({ ref: User, required: true })
  author: Ref<User>;
}

export const StreamModel = getModelForClass(Stream);
