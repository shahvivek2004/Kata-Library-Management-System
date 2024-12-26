import app from "./app";
import env from "dotenv";

env.config();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})