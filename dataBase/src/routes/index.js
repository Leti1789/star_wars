const { Router } = require("express");
const store = require("../database")
const { validateModel } = require("../middlewares")

const catchedAsync = require("../utils/cachedAsync")

const router = Router();

router.get("/:model", validateModel, async (req, res) => {
  const { model } = req.params;
  const response = await store[model].list()
  res.status(200).json(response)
})

router.get("/:model/id", async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].get(id)
  res.status(200).json(response)
})

router.delete("/:model/:id", validateModel, async(req,res)=>{
  const {model, id} = req.params;
  const response = await store[model].delete(id)
  res.status(200).json(response)
})

router.post("/:model", validateModel, catchedAsync(async (req, res) => {
    const { model } = req.params;
    const data = req.body
    const response = await store[model]?.insert(data);
    res.send(response);
  })
);

router.put("/:model", validateModel, async (req, res) => {
  const { model } = req.params; 
  const data = req.body
  const response = await store[model]?.update(data);
  res.send(response);
})
;

router.patch("/:model/:id", validateModel, async (req, res) => {
const { model, id } = req.params;
const response = await store[model].patch(id);
res.send(response);
})
;



module.exports = router;