import app from "./app";


app.listen(process.env.PORT, () => {
    console.log(`server start at port no: ${process.env.PORT}`);
  });