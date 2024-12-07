import fs from 'fs';
import { ServerComponentTwo } from './server-component-two';

export const ServerComponentOne = () => {
  fs.readFileSync('src/components/server-component-one.tsx');

  return (
    <>
      <h1>Server component one</h1>
      <ServerComponentTwo />
    </>
  );
};