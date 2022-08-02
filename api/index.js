import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";


const app = express();
dotenv.config();

const PORT = process.env.PORT || 8800;

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!")
})

//middleware
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    });
})

app.listen(PORT, () => {
    connect();
    console.log(`Server start on PORT = ${PORT}`)
})

// Callback : 인자로 받아들인 함수를 다시 호출하는 기능

// Promise : 작업이 끝난 후 실행할 함수를 제공하는 것이 아니라 Promise 자체 메소드인 .then 호출

// async : 비동기 처리 메소드를 위한 예약어 : async 이 없다면 await는 실행할 수 없다.

// await : async 함수 내부에서만 사용가능하며 결과값을 얻을 수 있을 때까지 대기하다 결과값을 리턴해줌