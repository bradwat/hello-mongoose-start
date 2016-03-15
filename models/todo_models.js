var mongoose = require('mongoose'),
  schema = mongoose.Schema;

// Todo Model
var todoSchema = new Schema ({
  desc: {
    type: String,
    required: true
  },
    completed: {
      type: Boolean,
      required: true
    }
  });

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
