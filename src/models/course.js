import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createCourse(nome) {
  return prisma.course.create({
    data: {
      nome,
    },
  });
}

export async function findAllCourses() {
  return prisma.course.findMany();
}

export async function findCourseById(courseId) {
  return prisma.course.findUnique({
    where: {
      id: courseId,
    },
  });
}

export async function updateCourse(courseId, nome) {
  return prisma.course.update({
    where: {
      id: courseId,
    },
    data: {
      nome,
    },
  });
}

export async function deleteCourse(courseId) {
  return prisma.course.delete({
    where: {
      id: courseId,
    },
  });
}