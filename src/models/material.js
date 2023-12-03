import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createMaterial(nome, courseId, nota) {
  return prisma.material.create({
    data: {
      nome,
      courseId,
      nota,
    },
  });
}

export async function findAllMaterials() {
  return prisma.material.findMany();
}

export async function findMaterialById(materialId) {
  return prisma.material.findUnique({
    where: {
      id: materialId,
    },
  });
}

export async function updateMaterial(materialId, nome, nota) {
  return prisma.material.update({
    where: {
      id: materialId,
    },
    data: {
      nome,
      nota,
    },
  });
}

export async function deleteMaterial(materialId) {
  return prisma.material.delete({
    where: {
      id: materialId,
    },
  });
}