// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Player2, Player, Todo, Post } = initSchema(schema);

export {
  Player2,
  Player,
  Todo,
  Post
};