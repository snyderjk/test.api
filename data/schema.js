import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
// import mocks from './mocks';
import resolvers from './resolvers';

const typeDefs = `
type Query {
  truck(name: String): Truck
  allTrucks: [Truck]
}

type Truck {
  id: String
  name: String
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

// addMockFunctionsToSchema({ schema, mocks });

export default schema;
