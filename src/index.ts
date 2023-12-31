import express from "express";
import tweetRoutes from "./routes/tweetRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();
app.use(express.json());
app.use('/user', userRoutes);
app.use('/tweet', tweetRoutes);

app.get("/", (request, response) => {
  response.send("Hello World");
});



app.listen(3000, () => {
  console.log("Server ready at localhost:3000");
});

