import { knex } from 'knex';

const dbConnect = function (filename) {
  return knex({
    client: 'sqlite3',
    connection: {
      filename: filename,
    },
    useNullAsDefault: true,
  });
};

export { dbConnect };
