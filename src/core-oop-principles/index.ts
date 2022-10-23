interface Todo {
  title: string;
  description?: string;
}

const todo1 = {
  title: "organize desk",
  extra: "metadata", // duck typing is allowed!
};

const updateTodo = (
 todo: Todo,
 fieldsToUpdate: Partial<Todo> // allow partial updates
) => ({ ...todo, ...fieldsToUpdate });

const result1 = updateTodo(todo1, {
  description: "throw out trash",
});

const todo2 = {
  ...todo1,
  description: "clean up", // call bombs without description
};

const updateRequiredTodo = (
 todo: Required<Todo>,
 fieldsToUpdate: Partial<Todo>
): Required<Todo> => ({ ...todo, ...fieldsToUpdate });

const result2 = updateRequiredTodo(todo2, {
  description: "throw out trash",
});


