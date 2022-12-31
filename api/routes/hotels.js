import express from "express";
import { updateHotel,
         createHotel,
         deleteHotel,
         getHotel,
         getHotels,
 } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);


//UPDATE
router.put("/:id",updateHotel);

//DELETE

router.delete("/:id",deleteHotel);

//get
router.get("/:id",getHotel);

//get all
router.get("/",getHotels);

export default router;