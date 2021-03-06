// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import pet from "./pet";
import workout from "./workout";
import workoutDay from "./workoutDay";
import workoutWeek from "./workoutWeek";
import users from "./users";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    pet,
    workout,
    workoutDay,
    workoutWeek,
    users
  ]),
});
