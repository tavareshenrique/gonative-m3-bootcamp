export const addTodo = () => ({
  type: 'ADD_TODO',
  payload: { text: 'Novo ToDo' },
});

export const markAsCompleted = id => ({
  type: 'MARK_AS_COMPLETED',
  payload: { id },
});
