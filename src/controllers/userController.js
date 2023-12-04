import { createUser, authenticateUser, findAllUsers, findUserById, updateUser, deleteUser } from '../models/user.js';

export async function createUserController(req, res) {
  const { nome, email, senha, cursoId } = req.body;

  try {
    const newUser = await createUser(nome, email, senha, cursoId);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar o usuário.' });
  }
}

export async function authenticateUserController(req, res) {
  const { email, senha } = req.body;

  try {
    const authResult = await authenticateUser(email, senha);
    res.status(200).json(authResult);
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Autenticação falhou.' });
  }
}

export async function getAllUsersController(req, res) {
  try {
    const users = await findAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter os usuários.' });
  }
}

export async function getUserByIdController(req, res) {
  const userId = parseInt(req.params.id);

  try {
    const user = await findUserById(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter o usuário.' });
  }
}

export async function updateUserController(req, res) {
  const userId = parseInt(req.params.id);
  const { nome, email, senha, cursoId } = req.body;

  try {
    const updatedUser = await updateUser(userId, nome, email, senha, cursoId);
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar o usuário.' });
  }
}

export async function deleteUserController(req, res) {
  const userId = parseInt(req.params.id);

  try {
    const deletedUser = await deleteUser(userId);
    if (deletedUser) {
      res.status(200).json({ message: 'Usuário excluído com sucesso.' });
    } else {
      res.status(404).json({ error: 'Usuário não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir o usuário.' });
  }
}