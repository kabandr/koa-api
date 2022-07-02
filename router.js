const Router = require("koa-router");
const router = new Router();
const {
  postBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook,
} = require("./controllers/bookController");

// Router & controllers
// Add a book
router.post("/books", postBook);
// Get all books
router.get("/books", getAllBooks);
// Get a specific book
router.get("/books/:id", getBook);
// Update a specific book
router.put("/books/:id", updateBook);
// Delete a book
router.delete("/books/:id", deleteBook);

module.exports = router;
