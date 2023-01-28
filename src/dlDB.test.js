import { dbConnect } from './dlDB';

const TEST_DB = '/tmp/test.db';

describe('testing of database interactions', () => {
  test('can connect to database', () => {
    const db = dbConnect(TEST_DB);
    return db
      .raw('SELECT 1;')
      .then((result) => expect(result).toEqual([{ 1: 1 }]));
  });
});
