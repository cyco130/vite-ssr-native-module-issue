import { hash } from "bcrypt";

hash("Hello world!", 10).then((hash) =>
	console.log("This hash was computed by bcrypt:", hash),
);
