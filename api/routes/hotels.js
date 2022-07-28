import { createHotel, updateHotel, deleteHotel, getHotel, getHotels } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
const express = require("express");
const router = express.Router();

//req : 사용자로부터 받은 값


//Create
router.post("/", createHotel);

//Update
router.put("/:id", updateHotel);

//Delete
router.delete("/:id", deleteHotel);

//Get
router.get("/:id", getHotel);


// router의 next는 다음 미들웨어로 이동을 의미하는 콜백 함수다
// 다음 미들웨어가 없을시 미들웨어 탈출 후 index로 이동
// 만약 반환없이 next만 사용할 시 사용이 두개의 함수가 동시에 실행하는 오류가 발생하므로
// 기능을 단일화하려면 return 을 붙여서 에러없이 사용해야한다.

//Get all
router.get("/", getHotels);
export default router