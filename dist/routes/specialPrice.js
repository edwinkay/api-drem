"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const specialPrice_1 = require("../controllers/specialPrice");
const router = (0, express_1.Router)();
// router.get("/user", getUser);
router.get("/user/:user_id/:nombre_producto", specialPrice_1.getUserById);
exports.default = router;
