import express from "express";
import { changeBookingStatus, checkAvailibilityOfCar, createBooking, getOwnerBookings, getUserBookings } from "../controllers/bookingController.js";
import {protect} from "../middleware/auth.js";

const bookingRouter =express.Router();

bookingRouter.post('/check-availability',checkAvailibilityOfCar)
bookingRouter.post('/create',protect,createBooking)
bookingRouter.get('/user',protect,getUserBookings)
bookingRouter.get('/owner',protect,getOwnerBookings)
bookingRouter.patch('/change-status',protect,changeBookingStatus)

export default bookingRouter;



