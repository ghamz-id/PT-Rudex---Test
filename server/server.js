const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("database.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get("/sales", (req, res) => {
	const { start_date, end_date, product } = req.query;
	const sales = router.db.get("sales").value();

	const filter = sales.filter((sale) => {
		const saleDate = new Date(sale.date);
		return (
			(saleDate >= new Date(start_date) && saleDate <= new Date(end_date)) ||
			sale.product === product
		);
	});

	if ((start_date && end_date) || product) {
		res.json(filter);
	} else {
		res.json(sales);
	}
});

server.use(router);
server.listen(3000, () => {
	console.log("JSON Server is running!");
});
