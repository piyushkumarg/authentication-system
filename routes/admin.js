const express = require("express");
const router = express.Router();

const {
  handleAdminRegister,
  handleAdminLogin,
  handleAdminAdduser,
  handleListAllNormalUser,
} = require("../controllers/admin");

const { authenticateAdmin } = require("../controllers/auth");

router.post("/register", handleAdminRegister);
router.post("/login", handleAdminLogin);
router.post("/add-user", authenticateAdmin, handleAdminAdduser);
router.get("/all-users", authenticateAdmin, handleListAllNormalUser);

module.exports = router;
