export default {
    name: "pet",
    type: "document",
    title: "Pet",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name"
        },
        {
            name: "race",
            type: "string",
            title: "Race"
        },
        {
            name: "weight",
            type: "string",
            title: "Weight"
        },
        {
            name: "ownerref",
            type: "reference",
            title: "Owner Ref",
            to: [{ type: "user" }]
        },
    ]
};