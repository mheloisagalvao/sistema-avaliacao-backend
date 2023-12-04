import { createCourse, findAllCourses, findCourseById, updateCourse, deleteCourse } from '../models/course.js';

export async function createCourseController(req, res) {
  const { nome } = req.body;

  try {
    const newCourse = await createCourse(nome);
    res.status(201).json(newCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar o curso.' });
  }
}

export async function getAllCoursesController(req, res) {
  try {
    const courses = await findAllCourses();
    res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter os cursos.' });
  }
}

export async function getCourseByIdController(req, res) {
  const courseId = parseInt(req.params.id);

  try {
    const course = await findCourseById(courseId);
    if (course) {
      res.status(200).json(course);
    } else {
      res.status(404).json({ error: 'Curso não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter o curso.' });
  }
}

export async function updateCourseController(req, res) {
  const courseId = parseInt(req.params.id);
  const { nome } = req.body;

  try {
    const updatedCourse = await updateCourse(courseId, nome);
    if (updatedCourse) {
      res.status(200).json(updatedCourse);
    } else {
      res.status(404).json({ error: 'Curso não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar o curso.' });
  }
}

export async function deleteCourseController(req, res) {
  const courseId = parseInt(req.params.id);

  try {
    const deletedCourse = await deleteCourse(courseId);
    if (deletedCourse) {
      res.status(200).json({ message: 'Curso excluído com sucesso.' });
    } else {
      res.status(404).json({ error: 'Curso não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir o curso.' });
  }
}