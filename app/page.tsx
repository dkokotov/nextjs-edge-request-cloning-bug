/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const req1 = new Request('https://example.com', {
    method: 'POST',
    headers: { 'X-Example-Header': 'Foo' }
  });
  const req2 = new Request(req1);

  return <div>
    Request 1 method: {req1.method}
    <br/>
    Request 1 headers: {req1.headers}
    <br/>
    Request 2 method: {req2.method}
    <br/>
    Request 2 headers: {req2.headers}
  </div>
}

export const runtime = 'edge';
