const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './data.db',
  },
  useNullAsDefault: true,
});

try {
  // Create a table
  const ct = knex.schema
    .createTable('users', (table) => {
      table.increments('id');
      table.string('user_name');
    })
    // ...and another
    .createTable('accounts', (table) => {
      table.increments('id');
      table.string('account_name');
      table.integer('user_id').unsigned().references('users.id');
    })
    .then((r) => console.log(r))
    .catch((err) => console.log(err));

  // Then query the table...
  const insertedRows = knex('users')
    .insert({ user_name: 'Tim' })
    .then(console.log)
    .catch(console.log);

  // ...and using the insert id, insert into the other table.
  const insert2 = knex('accounts')
    .insert({
      account_name: 'knex',
      user_id: 1,
    })
    .then(console.log)
    .catch(console.log);

  // Query both of the rows.
  const selectedRows = knex('users')
    .join('accounts', 'users.id', 'accounts.user_id')
    .select('users.user_name as user', 'accounts.account_name as account')
    .then(console.log)
    .catch(console.log);

  // map over the results
  //const enrichedRows = selectedRows.map((row) => ({ ...row, active: true }));

  knex.synch;

  // Finally, add a catch statement
} catch (e) {
  console.error(e);
}
