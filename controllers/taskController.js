
let tasks = [
  {id:1, title: "Tarea 1", Completed: false},
  {id:2, title: "Tarea 2", Completed: false},
];

const getAllTask = (req, res) =>{
  res.render("index", {title: "Lista de tareas", tasks});
};

const getAddTaskForm = (req, res) =>{
  
}

const addTask = (req, res) =>{
  
}

const getEditTaskForm = (req, res) =>{
  
}

const editTask = (req, res) =>{
  
}

const deleteTask = (req, res) =>{
  
}

export default{
  getAddTaskForm,
  getAllTask,
  addTask,
  getEditTaskForm,
  editTask,
  deleteTask
}