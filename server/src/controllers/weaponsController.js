const Weapon = require("../models/Weapon");

exports.getAll = async (req, res) => {
  try {
    const weapons = await Weapon.findAll();
    res.status(200).send(weapons);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

exports.getOneById = async (req, res) => {
  try {
    const weapon = await Weapon.getOne(req.params.id);
    res.status(201).send(weapon);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
exports.createOne = async (req, res) => {
  try {
    const newWeapon = await Weapon.createOne(req.body);
    res.status(201).send(newWeapon);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.deleteOneById = async (req, res) => {
  try {
    const result = await Weapon.deleteOneById(req.params.id);
    if (!result.affectedRows)
      return res.status(400).json({ error: "No item deleted" });
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.updateOneById = async (req, res) => {
  try {
    const result = await Weapon.updateOneById(req.params.id, req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
