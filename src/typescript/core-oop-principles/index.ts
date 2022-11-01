interface TodoInit {
  title: string;
  description?: string;
}

const todo1 = {
  title: "organize desk",
  extra: "metadata", // duck typing is allowed!
};

const updateTodo = (
 todo: TodoInit,
 fieldsToUpdate: Partial<TodoInit> // allow partial updates
) => ({ ...todo, ...fieldsToUpdate });

const result1 = updateTodo(todo1, {
  description: "throw out trash",
});

const todo2 = {
  ...todo1,
  description: "clean up", // call bombs without description
};

const updateRequiredTodo = (
 todo: Required<TodoInit>,
 fieldsToUpdate: Partial<TodoInit>
): Required<TodoInit> => ({ ...todo, ...fieldsToUpdate });

const result2 = updateRequiredTodo(todo2, {
  description: "throw out trash",
});


