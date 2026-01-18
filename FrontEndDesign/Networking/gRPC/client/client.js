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

const client = new customersProto.CustomerService(
    "127.0.0.1:30433",
    grpc.credentials.createInsecure()
);

module.exports = client;
