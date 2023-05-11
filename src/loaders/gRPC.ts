import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../proto/datapacket';
const path = require('path');
import config from '../config';
import Logger from '../helpers/logger';
import { insertQuery } from '../handlers/handler';

const PROTO_FILE = '../../protoSrc/datapacket.proto';

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE), {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});
const grpcObj = grpc.loadPackageDefinition(
  packageDef,
) as unknown as ProtoGrpcType;
const dataPacketPackage = grpcObj.dataPacket;
const logger = new Logger('grpc');

export default () => {
  const server = new grpc.Server();
  server.bindAsync(
    `${config.host}:${config.gRPCPort}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`gRPC started on port ${port}`);
      logger.info(`gRPC started on port ${port}`);
      server.start();
    },
  );

  server.addService(dataPacketPackage.AVLDataPacketService.service, {
    Insert: (call: any, callback: any) => {
      console.log(call.request);
      const res = insertQuery(call.request);
      //callback(call.request);
      res.then((e) => console.log(e));
    },
  });
};
