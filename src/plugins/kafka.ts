// import { Kafka } from 'kafkajs';
// import Logger from '../helpers/logger';
// import { insertQuery } from '../handlers/handler';

// const kafka = new Kafka({
//   clientId: 'my-app',
//   brokers: ['kafka1:9092', 'kafka2:9092'],
// });

// const logger = new Logger('kafka');

// export const consumer = kafka.consumer({ groupId: 'cassandra-db-client' });

// export default async () => {
//   await consumer.connect();
//   await consumer.subscribe({ topics: ['AVL-Data-Packet'] });
//   await consumer.run({
//     eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
//       logger.info('[message]', {
//         key: message.key?.toString(),
//         value: message.value?.toString(),
//         headers: message.headers,
//       });

//       // await insertQuery(message.value?.toString());
//     },
//   });
// };
