import app from "./app";
import "./database";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});
