const { todo } = require('../../models'); // Pastikan path ke model benar

const getAlltitle = async (req, res) => {
  try {
      const todos = await todo.findAll();
      res.json({ data: todos });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
}

const detailTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const todoItem = await todo.findByPk(id);
        if (todoItem) {
            res.json(todoItem);
        } else {
            res.status(404).json({ error: 'Todo not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const createTodo = async (req, res) => {
    const { title } = req.body;
    try {
        const todoItem = await todo.create({ Title: title }); // Perhatikan bahwa Anda menggunakan 'Title' di model
        res.json(todoItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
      const todoItem = await todo.findByPk(id);
      if (todoItem) {
          await todoItem.destroy();
          res.json({ message: 'Todo deleted successfully' });
      } else {
          res.status(404).json({ error: 'Todo not found' });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {
    getAlltitle,
    detailTodo,
    createTodo,
    deleteTodo
};
