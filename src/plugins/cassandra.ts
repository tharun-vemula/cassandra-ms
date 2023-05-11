import { Client } from 'cassandra-driver';
import config from '../config';
import Logger from '../helpers/logger';
import {
  KepSpaceCreateQuery,
} from '../types/prepare';

export const client = new Client({
  contactPoints: config.db.contactPoints,
  localDataCenter: config.db.localDataCenter,
});
const logger = new Logger('plugin');

export default async () => {
  try {
    await client.connect();
    logger.debug(
      `Connected to ${client.hosts.length} nodes in the cluster: ${client.hosts
        .keys()
        .join(', ')}`,
    );

    client.execute(KepSpaceCreateQuery);
  } catch (error) {
    logger.error(error);
    console.log(error);
  }
};
