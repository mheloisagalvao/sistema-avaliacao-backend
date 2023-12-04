import { createMaterial, findAllMaterials, findMaterialById, updateMaterial, deleteMaterial } from '../models/material.js';

export async function createMaterialController(req, res) {
  const { nome, courseId, nota } = req.body;

  try {
    const newMaterial = await createMaterial(nome, courseId, nota);
    res.status(201).json(newMaterial);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar o material.' });
  }
}

export async function getAllMaterialsController(req, res) {
  try {
    const materials = await findAllMaterials();
    res.status(200).json(materials);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter os materiais.' });
  }
}

export async function getMaterialByIdController(req, res) {
  const materialId = parseInt(req.params.id);

  try {
    const material = await findMaterialById(materialId);
    if (material) {
      res.status(200).json(material);
    } else {
      res.status(404).json({ error: 'Material não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter o material.' });
  }
}

export async function updateMaterialController(req, res) {
  const materialId = parseInt(req.params.id);
  const { nome, nota } = req.body;

  try {
    const updatedMaterial = await updateMaterial(materialId, nome, nota);
    if (updatedMaterial) {
      res.status(200).json(updatedMaterial);
    } else {
      res.status(404).json({ error: 'Material não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar o material.' });
  }
}

export async function deleteMaterialController(req, res) {
  const materialId = parseInt(req.params.id);

  try {
    const deletedMaterial = await deleteMaterial(materialId);
    if (deletedMaterial) {
      res.status(200).json({ message: 'Material excluído com sucesso.' });
    } else {
      res.status(404).json({ error: 'Material não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir o material.' });
  }
}