import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../../swagger.json";
import { DriverInMemoryRepository } from "../repositories/DriverInMemoryRepository";
import { ListAvailableDriversUseCase } from "../../core/usecases/ListAvailableDriversUseCase";
import { DriverController } from "./controllers/DriverController";
import { jwtAuth } from "./middlewares/auth";

const app = express();
app.use(express.json());

// Basic logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.path}`);
  next();
});

// Setup routes
const repo = new DriverInMemoryRepository();
const usecase = new ListAvailableDriversUseCase(repo);
const controller = new DriverController(usecase);

app.get("/api/drivers", jwtAuth, (req, res) => controller.list(req, res));
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Global error handler (simple)
app.use((err: any, req: any, res: any, next: any) => {
  console.error("Unhandled error", err);
  res.status(500).json({ message: "Internal server error" });
});

const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

export default app;
