import { render } from '../../dist/entry-server';

export async function handler(event) {
  const html = render(event.path);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };
}
