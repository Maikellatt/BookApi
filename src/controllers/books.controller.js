import prisma from "../config/prisma.config.js";

export const getAllBooks = async (request, response) => {
  try {
    const books = await prisma.book.findMany();

    response.json({
      message: "All books",
      data: books
    });
  } catch (exception) {
    console.log(exception);
    response.status(500).json({
      message: "Something went wrong",
      error: exception.message
    });
  }
};

export const getBookById = (request, response) => {
  response.json({
    id: request.params.id,
  });
};

export const createBook = (request, response) => {
  response.json({
    message: "Book created",
  });
};

export const updateBook = (request, response) => {
  response.json({
    message: "Book updated",
  });
};

export const deleteBook = (request, response) => {
  response.json({
    message: "Book deleted",
  });
};
