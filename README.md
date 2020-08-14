# GraphQL Workshop

This is the repository that accompanies my GraphQL Workshop.

## Execises

### Exercise 1: _Your first query_

Try out your first GraphQL query.
Follow [this link](https://developer.github.com/v4/explorer/) to open up the Github GraphQL API.
Click the button at the top right to authenticate and start writing a query.
Find out how many repositories are in your account! _(ca. 5 minutes)_

**Hint**: Hit <kbd>ctrl</kbd>+<kbd>space</kbd> to get field autocomplete suggestions.

### Exercise 2: _Recap - JSON data types_

Make a list of [data types](https://en.wikipedia.org/wiki/Data_type) that can be serialised in the JSON format.
Create an example JSON document that contains all different data types.
Which types are primitive types and which types are complex types? _(ca. 10 minutes)_

### Exercise 3 _Recap - Mongoose models_

> To get started with the next exercises, fork this repository to your account using the Github website.
> Now clone the repository to your machine and follow the instructions of `backend` and `frontend`.

Create a Mongoose model for our pet shelter inhabitants.
The model should be names _pet_ and have the following fields:

- _name_ which is a `String` and required
- _type_ which is either `DOG`, `CAT` or `RABBIT` and required
- _adopted_ is a `Boolean` and required
- _picture_ which is a `String` (the url of the image)
- _breed_ which is a `String`
- _height_ which is a `Number` and will contain the height of the animal in centimeters

Start the Mongo DB on your computer and create a `.env` file in `backend` that contains the environment variable `MONGODB_URL`. _(ca. 10 minutes)_

### Exercise 4: _Hello World_

Create your first query: Add a field to the root query type in `src/graphql/types.js`.
The field should be named _hello_ and should return the string _"Hello world!"_.
Declare the `type` as `GraphQLString` and the `resolver` should be a trivial function that takes no arguments and always returns our hello world string.
If you want you can add a `description` as well!
Start the server as described in the README of `backend` and open your browser `http://localhost:8080/graphql`.
Your server should now be able to respond to the query:

```graphql
{
  hello
}
```

_(ca. 5 minutes)_

**Bonus**: Make the [return value of the query non-nullable](https://graphql.org/graphql-js/type/#graphqlnonnull).

### Exercise 5: _Field arguments_

Open up the [Github API](https://developer.github.com/v4/explorer/) again.
Find out how many repositories are on my (_hendrikniemann_) account!

Now add an argument to the `hello` query called _name_ of type `String`.
If the argument is supplied return a string that contains the name instead e.g. _"Hello Hendrik!"_. _(ca. 3 minutes)_

### Exercise 6: _Enum types_

Create an enum type for `PetType` with the values `DOG`, `CAT` or `RABBIT`.
For this exercises we put all the types into the `types.js` file.
In a larger project you might want to create one file for every type. _(ca. 10 minutes)_

### Exercise 7: _Object types_

Create a GraphQL object type for our pets.
The object type should have all the fields of the Mongoose model.
Make sure to define required fields as non-nullable using `GraphQLNonNull`.

Now add a field to the `Query` object type to create a query: `pet`.
The pet query takes one required argument `id` and returns a single pet with the supplied ID.
If there is no pet with the given ID, return `null`.

Add another query field `pets`.
`pets` should return the list of all pets.
For this return a new `GraphQLList` of `Pet`. _(ca. 30 minutes)_

### Exercise 8: _Creating relationships between object types_

Create a new Mongoose model `EmployeeModel` and a corresponding GraphQL object type with `firstName`, and `lastName` of the employee.
Now create a field `responsibleEmployee` in the pet model and object type that references an employee.
Here you will have to write a custom resolver that loads the employee from the database if the field is requested. _(ca. 15 minutes)_

**Bonus**: Create a query field for employees similar to `pets`.

### Exercise 9: _Create a mutation_

Create a new object type `Mutation` and add it to your schema (in the `mutation` property next to `query`).
Create a field in this object type `adopt` that takes one argument `id`.
If a pet with the provided ID is found, udpate the field `adopted` for the given pet in the Mongo DB.
Which return type would you use for this mutation field? _(ca. 15 minutes)_

### Exercise 10: _Recap - Sending an HTTP request and handling state_

> We are now switching to the frontend part.

Send a GraphQL query using `window.fetch`.
The request should query the `pets` field and return the name and type of the pet.
Create a state object that saves the result of our GraphQL query and an effect that runs when the component gets rendered:

```js
const [result, setResult] = React.useState(null);
React.useEffect(() => {
  // remember: No async/await in useEffect!
  fetch(/* ... */).then(() => {
    // ...
  });
}, []);
```

The query returns a `data` property with the result and potentially `errors`.
If the query returns an error inform the user about this situation and log the message to the console.
If the query returns data, render a list of pets in the frontend. _(ca. 20 minutes)_

### Exercise 11: _Declarative data fetching_

Configure the Apollo GraphQL client as described [here](https://www.apollographql.com/docs/react/get-started/#create-a-client) in `App.js`.
Don't forget to wrap your app with the `ApolloProvider`!

Replace your previous code with the `useQuery` hook from `@apollo/client` as described [further down in the getting started tutorial](https://www.apollographql.com/docs/react/get-started/#request-data). _(ca. 10 minutes)_

### Exercise 12: _Use Mutation_

For each input row, if the pet is not adopted show a button _adopt_ that runs the `adopt` mutation for this particular pet. _(ca. 15 minutes)_

**Bonus**: Disable the button while the mutation is fetching!

### Exercise 13: _Advanced - Add a custom scalar_

Install the [graphql-scalars](https://github.com/Urigo/graphql-scalars) package from NPM.
Add a field to the pet model `guestSince` that saves the time of when the pet has been brought to the shelter. _(ca. 5 minutes)_

**Bonus**: Add an optional argument to the `pets` query: `orderBy` that takes an enum type `GUEST_SINCE_ASC` and `GUEST_SINCE_DESC` and return a sorted list from the pets field.

### Exercise 14: _Advanced - Add a filter input object type_

Add an optional argument to the `pets` query `filter` that takes an input object type with various filter options: _(ca. 30 minutes)_

```graphql
input PetFilter {
  type: PetType
  adopted: Boolean
  ...
}
```

### Exercise

Get creative!
You made it till the end of this workshop.
You now have all the tools you need to add more and more features to the pet shelter app.

## Reading List

_The following resources are for you do recap the things discussed in the workshop._

### History of GraphQL

- Introduction [blog post](https://graphql.github.io/blog/graphql-a-query-language/) from Lee Byron
- GraphQL [the documentary](https://www.youtube.com/watch?v=783ccP__No8) by Honeypot
- Benefits of GraphQL - [learning article](https://www.apollographql.com/docs/intro/benefits/) by Apollo

### Sending GraphQL queries

- GraphQL over HTTP [learning chapter](https://graphql.org/learn/serving-over-http/) and [specification](https://github.com/graphql/graphql-over-http)
