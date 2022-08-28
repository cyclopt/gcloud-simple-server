const publicRoutes = (fastify, opts, done) => {
	fastify.get("/", (req, reply) => reply.send({ message: `'sup bruh? i’m server ${process.env.SERVER_ID || 1}!` }));

	fastify.get("/ping/", (req, reply) => reply.send({ message: "pong" }));

	done();
};

export default publicRoutes;
