import { GraphQLScalarType, Kind, parseValue } from 'graphql';
import { ObjectId } from 'mongodb';

// Маппит айдишники монго для graphql(в строки)
export const ObjectIdScalar = new GraphQLScalarType({
  name: 'ObjectId',
  description: 'Mongo id scalar type',
  parseValue(value: string) {
    return new ObjectId(value); // from client
  },
  serialize(value: ObjectId) {
    return value.toHexString(); // from server
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new ObjectId(ast.value); // from client
    }
    throw new Error('Invalid id type');
  },
});
