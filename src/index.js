import Resolver from '@forge/resolver';

const resolver = new Resolver();

resolver.define('getText', (req) => {
  console.log(req);

  return 'Hello, this is some data for the world!';
});

export const handler = resolver.getDefinitions();
