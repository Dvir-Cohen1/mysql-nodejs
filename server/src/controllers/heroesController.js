const Hero = require("../models/Hero");

exports.getAll = async (req, res) => {
  try {
    const heros = await Hero.findAll();
    res.status(200).send(heros);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

exports.getOneById = async (req, res) => {
  try {
    const hero = await Hero.getOne(req.params.id);
    res.status(201).send(hero);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.createOne = async (req, res) => {
  try {
    const newHero = await Hero.createOne(req.body);
    res.status(201).send(newHero);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.deleteOneById = async (req, res) => {
  try {
    const hero = await Hero.deleteOne(req.params.id);
    res.status(200).send(hero);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.updateOneById = async (req, res) => {
  try {
    const result = await Hero.updateOneById(req.params.id, req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
