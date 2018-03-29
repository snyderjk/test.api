import { Truck } from "./connectors";

const resolvers = {
    Query: {
        truck(_, args) {
             return Truck.find({ where: args });
        },
        allTrucks() {
             return Truck.findAll();
        }
    }
}

export default resolvers;