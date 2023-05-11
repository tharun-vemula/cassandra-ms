import fastify from 'fastify';
import cors from '@fastify/cors';
import config from '../config';
import Logger from '../helpers/logger';
import routes from '../routes';
import DBplugin from '../plugins/cassandra';

//import kafkaPlugin from '../plugins/kafka';

export default async () => {
  const server = fastify({ logger: true });
  const logger = new Logger('app');

  server.register(cors);
  routes(server);
  DBplugin();
  //kafkaPlugin();

  server.addHook('onRequest', (req, reply, done) => {
    logger.debug(`Request received ${req.method} ${req.url}`, {
      body: req.body,
      query: req.query,
    });

    done();
  });

  server.listen(
    { port: +config.serverPort, host: '127.0.0.1' },
    (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Server listening at ${address}`);
    },
  );
};
