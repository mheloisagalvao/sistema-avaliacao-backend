import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const saltRounds = 10;

export async function createUser(nome, email, senha, cursoId) {
  try {
    const hashedPassword = await bcrypt.hash(senha, saltRounds);

    return prisma.user.create({
      data: {
        nome,
        email,
        senha: hashedPassword,
        cursoId,
      },
    });
  } catch (error) {
    throw new Error(`Erro ao criar usuário: ${error.message}`);
  }
}

export async function authenticateUser(email, senha) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error('Usuário não encontrado.');
  }

  const passwordMatch = await bcrypt.compare(senha, user.senha);

  if (!passwordMatch) {
    throw new Error('Credenciais inválidas.');
  }

  const token = generateAuthToken(user.id);

  return {
    user,
    token,
  };
}

function generateAuthToken(userId) {
  const token = jwt.sign({ userId }, 'secreto', { expiresIn: '1h' });

  return token;
}


export async function findAllUsers() {
  return prisma.user.findMany();
}

export async function findUserById(userId) {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
}

export async function updateUser(userId, nome, email, senha, cursoId) {
  const hashedPassword = await bcrypt.hash(senha, saltRounds);

  return prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      nome,
      email,
      senha: hashedPassword,
      cursoId,
    },
  });
}

export async function deleteUser(userId) {
  return prisma.user.delete({
    where: {
      id: userId,
    },
  });
}