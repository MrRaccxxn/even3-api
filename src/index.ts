import app from "./app";
import "./database";

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});
