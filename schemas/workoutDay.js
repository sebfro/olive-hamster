export default {
    name: "workoutday",
    title: "Workout Day",
    type: "document",
    fields: [
        {
            title: "Workout Week ref",
            name: "workoutweekref",
            type: "reference",
            to: [{ type: "workoutweek" }]
        },
        {
            name: "workoutday",
            type: "string",
            title: "Workout Day"
        },
        // {
        //     name: "name",
        //     type: "array",
        //     title: "Name",
        //     of: [{ type: "string" }]
        // }
    ]
};