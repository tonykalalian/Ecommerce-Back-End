const router = require("express").Router();
const authService = require("../services/authService");

// Registration
router.post("/register", async (req, res) => {
  const userData = req.body;

  try {
    const newUser = await authService.register(userData);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  const loginData = req.body;

  try {
    const user = await authService.login(loginData);
    res.status(200).json(user);
  } catch (err) {
    res.status(401).json(err);
  }
});

module.exports = router;
