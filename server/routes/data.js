const router = require("express").Router();
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);

router.get("/", async (req, res) => {
  res.status(200).json({ message: "Congrats you are authorized", ip: req.ip });
});


module.exports = router