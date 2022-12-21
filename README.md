#

## code snippet

### create

import { DataStore } from '@aws-amplify/datastore';
import { Pos, Todo } from './models';

await DataStore.save(
    new Post({
		"title": "Lorem ipsum dolor sit amet",
		"rating": "Lorem ipsum dolor sit amet",
		"content": "Lorem ipsum dolor sit amet"
	})
);

await DataStore.save(
    new Todo({
		"name": "Lorem ipsum dolor sit amet",
		"description": "Lorem ipsum dolor sit amet",
		"isComplete": true
	})
);



### update

/* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item’s fields rather than mutating the instance directly */
await DataStore.save(Post.copyOf(CURRENT_ITEM, item => {
    // Update the values on {item} variable to update DataStore entry
}));


/* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item’s fields rather than mutating the instance directly */
await DataStore.save(Todo.copyOf(CURRENT_ITEM, item => {
    // Update the values on {item} variable to update DataStore entry
}));

### delete

const modelToDelete = await DataStore.query(Post, 123456789);
DataStore.delete(modelToDelete);

const modelToDelete = await DataStore.query(Todo, 123456789);
DataStore.delete(modelToDelete);


### query

const models = await DataStore.query(Post);
console.log(models);

const models = await DataStore.query(Todo);
console.log(models);