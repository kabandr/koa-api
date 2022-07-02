const Book = require('../models/bookModel')

const postBook = async (ctx) => {
  try {
    const { author, title, isbn } = ctx.request.body;
    ctx.body = await Book.create({
      author,
      title,
      isbn,
      publication_date: new Date(),
    });
    ctx.status = 201;
  } catch (error) {
    ctx.status = 500;
  }
};

const getAllBooks = async (ctx) => {
  try {
    ctx.body = await Book.find();
    ctx.status = 200;
  } catch (error) {
    ctx.status = 500;
  }
};

const getBook = async (ctx) => {
  try {
    ctx.body = await Book.findById(ctx.params.id);
    ctx.status = 200;
  } catch (error) {
    ctx.status = 500;
  }
};

const updateBook = async (ctx) => {
  try {
    ctx.body = await Book.findByIdAndUpdate(
      ctx.params.id,
      { $set: ctx.request.body },
      { new: true }
    );
    ctx.status = 201;
  } catch (error) {
    ctx.status = 500;
  }
};

const deleteBook = async (ctx) => {
    try {
      ctx.body = await Book.findByIdAndDelete(ctx.params.id);
      ctx.status = 200;
    } catch (error) {
      ctx.status = 500;
    }
  }

module.exports = { postBook, getAllBooks, getBook, updateBook, deleteBook };
