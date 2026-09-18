/**
 * Sanitised illustrative example. Not copied from the private production repository.
 */

import express from "express";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.post(
  "/vehicles",
  body("vin").isString().trim().isLength({ min: 8, max: 32 }),
  body("status").isIn(["inventory", "reserved", "sold"]),
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const vehicle = await req.services.vehicles.create({
        vin: req.body.vin,
        status: req.body.status,
        actorId: req.user.id,
      });

      return res.status(201).json(vehicle);
    } catch (error) {
      return next(error);
    }
  },
);

export default router;
