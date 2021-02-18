import { config, createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';

const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay singed in?
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseUrl,
    // TODO: Add data seeding here
  },
  lists: createSchema({
    // Schema items go in
  }),
  ui: {
    // TODO: change this for roles
    isAccessAllowed: () => true,
  },
  // TODO: Add session value here
});
