// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Business, Player2, Player, Todo, Post } = initSchema(schema);

export {
  Business,
  Player2,
  Player,
  Todo,
  Post
};