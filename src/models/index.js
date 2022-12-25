// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Player, Todo, Post } = initSchema(schema);

export {
  Player,
  Todo,
  Post
};