import Router from 'express';

const router = Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

export default router;
