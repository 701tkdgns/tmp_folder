const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth.js");
const usersRoute = require("./routes/users.js");
const hotelsRoute = require("./routes/hotels.js");
const roomsRoute = require("./routes/rooms.js");
const app = express();
const path = require("path");
dotenv.config(path.join(__dirname, ".env"));
const PORT = process.env.PORT;

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        throw error
    }
};

//middleware

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack: err.stack
    });
});

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
})

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));