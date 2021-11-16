// @ts-check
const { createServer } = require("vite");

createServer().then(async (server) => {
	await server.ssrLoadModule("./ssr-module.js");
	await server.close();
});
