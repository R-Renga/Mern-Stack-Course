const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const PROTO_PATH = "./customers.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true,
});

const customersProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

const customers = [
    { id: 1, name: "raja" },
    { id: 2, name: "praveen" },
];

server.addService(customersProto.CustomerService.service, {
    getAll: (call, callback) => {
        callback(null, { customers });
    },
    Get: (call, callback) => {},
    Insert: (call, callback) => {},
    Update: (call, callback) => {},
    Delete: (call, callback) => {},
});

server.bindAsync("127.0.0.1:30433", grpc.ServerCredentials.createInsecure(), () => {
    console.log("gRPC Server running on port 30433");
    server.start();
});
