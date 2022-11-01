interface Todo {
  title: string;
  description?: string; // string | undefined
  completed: boolean;
}

type TodoPreview1 = Pick<Todo, "title" | "completed">;

const todo3: TodoPreview1 = {
  //explicit typing
  title: "Clean room",
  completed: false,
  // description: "x", // duck typing is NOT allowed
};

type TodoPreview2 = Omit<Todo, "description" | "completed">;

const todo4: TodoPreview2 = {
  title: "Clean room",
};

const todo5: Readonly<Todo> = {
  title: "Delete inactive users",
  completed: true,
};

// todo5.completed = false; // bombs

const todo6: Todo = {
  ...todo3,
  description: "Doing shores is fun",
};

const description: NonNullable<string | undefined> =
 // bombs without null coalescing
 todo6.description ?? ""
