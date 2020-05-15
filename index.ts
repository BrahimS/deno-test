// Create a server
import { serve } from 'https://deno.land/std@0.50.0/http/server.ts'
const live = serve({ port: 8000 })
console.log('http://localhost:8000/')
for await (const req of live) {
	req.respond({ body: '<h1>Salamoalykoum</h1>' })
}
