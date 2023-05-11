import dotenv from 'dotenv';

dotenv.config();

const config = {
  environment: process.env.NODE_ENV || 'development',
  serverPort: process.env.PORT || 3000,
  api: {
    prefix: process.env.API_PREFIX || '/api/v1',
  },
  host: process.env.HOST || '127.0.0.1',
  gRPCPort: process.env.GRPC_PORT || 4000,
  port: process.env.PORT || 3000,
  db: {
    contactPoints: ['127.0.0.1:9042'],
    localDataCenter: process.env.DATA_CENTER || 'datacenter1',
  },
  jwt: {
    secret: 'C1ZWpMja&V0c2vBDFhq^N*VXR1@ekULC',
    expires: '30d',
    issuer: 'api.user.in',
    audience: 'app.user.in',
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
  },
  protoPath: {
    path: process.env.PROTO_PATH || './datapacket.proto',
  },
};

export default config;
