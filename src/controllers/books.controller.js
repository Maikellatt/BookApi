
export const getAllBooks = (request, response) => {
    response.json({
        message: "All books"
    });
};

export const getBookById = (request, response) => {
    response.json({
        id: request.params.id
    })
};

export const createBook = (request, response) => {
    response.json({
        message: "Book created"
    });
};

export const updateBook = (request, response) => {
    response.json({
        message: "Book updated"
    });
};

export const deleteBook = (request, response) => {
    response.json({
        message: "Book deleted"
    });
};