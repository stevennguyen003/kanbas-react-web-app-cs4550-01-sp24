import * as rocketDao from "rocketDao"
export default function RocketRoutes(app) {
  const createRocket = async (req, res) => {
    const rocket = ___10___.___7___
    const newRocket = await rocketDao.createRocket(rocket)
    res.json(newRocket)
  }
  const readOneRocket = async (req, res) => {
    const {rocketId} = req.___6___
    const rocket = await rocketDao.readOneRocket(rocketId)
    res.json(rocket)
  }
  const readAllRockets = async (req, res) => {
    const rockets = await rocketDao.readAllRockets()
    res.json(rockets)
  }
  const updateRocket = async (req, res) => {
    const {rocketId} = req.___6___
    const rocket = req.___7___
    const status = await rocketDao.updateRocket(rocketId, rocket)
    res.json(status)
  }
  const removeRocket = async (req, res) => {
    const {rocketId} = req.___6___
    const status = await rocketDao.removeRocket(rocketId)
    res.json(status)
  }
  app.post("/api/rockets", createRocket)
  app.get("/api/rockets", readAllRockets)
  app.get("/api/rockets/:rocketId", readOneRocket)
  app.put("/api/rockets/:rocketId", updateRocket)
  app.delete("/api/rockets/:rocketId", removeRocket)
}