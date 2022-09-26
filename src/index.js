import Resolver from '@forge/resolver';
import ForgeUI, { render } from '@forge/ui';
import App from './App';

// redirectig to UI kit page
export const Global = render(
  <App />
);

// backend "forge lambda" to be called by frontend React for instance
const resolver = new Resolver();
resolver.define('getText', (req) => {
  console.log(req);

  return 'Hello, this is some data for the world!';
});
export const handler = resolver.getDefinitions();
