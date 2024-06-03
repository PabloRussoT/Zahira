import express from 'express';
import { Medic } from '../models/Medic.js';

const router = express.Router();

// Obtener todos los médicos
router.get('/', async (req, res) => {
  try {
    const medics = await Medic.findAll();
    res.json(medics);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching medics' });
  }
});

// Crear un nuevo médico
router.post('/', async (req, res) => {
  try {
    const newMedic = await Medic.create(req.body);
    res.json(newMedic);
  } catch (error) {
    res.status(500).json({ error: 'Error creating medic' });
  }
});

// Eliminar un médico
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const medic = await Medic.findByPk(id);
    if (medic) {
      await medic.destroy();
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: 'Medic not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting medic' });
  }
});

export default router;
