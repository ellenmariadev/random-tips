const tipsController = (app, database) => {
  app.get("/tips", (req, res) => {
    res.json({
      tips: database.tips[parseInt(Math.random() * database.tips.length)],
    });
  });

  app.post("/create", (req, res) => {
    const body = req.body;
    database.tips.push(body.tips);
    res.json(body);
    console.log("Sucesso!");
  });
};

export default tipsController;
