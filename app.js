import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';

// Define whether we're in development mode
const dev = process.env.NODE_ENV !== 'production';

// Initialize the Next.js app with the appropriate mode
const app = next({ dev }); // This now properly uses the dev variable
const handle = app.getRequestHandler();

// Get the port from the environment or use default
const port = process.env.PORT || 3000;

app
	.prepare()
	.then(() => {
		const server = createServer((req, res) => {
			// Parse the URL
			const parsedUrl = parse(req.url, true);

			// Let Next.js handle the request
			handle(req, res, parsedUrl);
		});

		server.listen(port, (err) => {
			if (err) throw err;
			console.log(`> Ready on port ${port}`);
			console.log(`> Mode: ${dev ? 'development' : 'production'}`);
		});
	})
	.catch((err) => {
		console.error('Error starting server:', err);
		process.exit(1);
	});
