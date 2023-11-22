let array_todos = [
    {
      id: 1,
      title: "Tugas Mendesain website",
      description: "mendesain web dengan css",
      createdAt: "13/11/2023",
    },
    {
      id: 2,
      title: "Tugas javascript",
      description: "Membuat if else",
      createdAt: "13/11/2023",
    },
    {
      id: 3,
      title: "Tugas Membuat API",
      description: "Membuat API menggunakan postman",
      createdAt: "13/11/2023",
    },
  ];
  
  function getTodos() {
    return array_todos;
  }
  
  function deleteTodos(deleted_index) {
    array_todos = array_todos.filter((todo, index) => index !== deleted_index);
  }
  
  function addTodo(todo) {
    array_todos = [...array_todos, todo];
  }
  
  export { getTodos, deleteTodos, addTodo };