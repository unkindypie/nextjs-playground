// import { prop as Property, getModelForClass } from '@typegoose/typegoose';
import { ObjectID } from 'mongodb';
import { Field } from 'type-graphql';

export class BaseEntity {
  @Field()
  readonly _id: ObjectID;
}
