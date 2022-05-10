export default {
    name: "workout",
    title: "Workout",
    type: "document",
    fields: [
        {
            name: "ovelse",
            type: "string",
            title: "Ovelse"
        },
        {
            title: "Workout Day ref",
            name: "workoutdeyref",
            type: "reference",
            to: [{ type: "workoutday" }]
        },
        {
            name: "sets",
            type: "array",
            title: "Sets",
            of: [{ type: "string" }]
        }
    ]
};