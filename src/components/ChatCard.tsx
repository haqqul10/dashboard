import { useState } from 'react';

const ChatCard = () => {
  const [activity, setActifity] = useState('');
  const [message, setMessage] = useState('');
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({});

  function generateId() {
    return Date.now();
  }

  const saveTodoHandler = (e) => {
    e.preventDefault();

    if (!activity) {
      return setMessage('task cannot be empty');
    }

    if (edit.id) {
      const updatedTodo = {
        id: edit.id,
        activity,
      };

      const editTodoIndex = todos.findIndex((todo) => {
        return todo.id == edit.id;
      });

      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updatedTodo;

      return setTodos[updatedTodos];
    }

    setTodos([
      ...todos,
      {
        id: generateId(),
        activity,
        done: false,
      },
    ]);
    setMessage('');
    setActifity('');
  };

  const removeTodoHandler = (todoId) => {
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(filteredTodos);
  };

  const doneTodoHandler = (todo) => {
    const updatedTodo = { ...todo, done: todo.done ? false : true };

    const editTodoIndex = todos.findIndex((currentTodo) => {
      return currentTodo.id == edit.id;
    });

    const updatedTodos = [...todos];
    updatedTodos[editTodoIndex] = updatedTodo;

    setTodos(updatedTodos);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 py-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h4 className="mb-1 text-base font-semibold text-black dark:text-white">
            Tasks
          </h4>
          <p className="text-bodydark dark:text-white font-medium text-sm">
            Today
          </p>
        </div>
        <p className="cursor-pointer text-primary">View All</p>
      </div>
      <div>
        <div className="w-full border-b border-gray pb-4 mb-4">
          <form onSubmit={saveTodoHandler}>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="create new task"
                value={activity}
                className="w-full p-1"
                onChange={(e) => setActifity(e.target.value)}
              />
              <button type="submit" className="bg-stroke px-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                {/* {edit.id ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                ) : (
                 
                )} */}
              </button>
            </div>
          </form>
          {message && <p className="text-xs text-danger mt-1">{message}</p>}
        </div>
        {todos.length > 0 ? (
          <div>
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="flex justify-between items-center border-b border-gray pb-4 mb-4 last:border-b-0 last:mb-0 last:pb-0"
              >
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    onChange={doneTodoHandler.bind(this, todo)}
                  />
                  {/* <input value={todo} type="checkbox" onChange={handleCheck} /> */}
                  <h5 className="text-black dark:text-white font-medium">
                    {todo.activity}
                  </h5>
                </div>
                <div className="flex items-center gap-2">
                  {/* <div
                    className="cursor-pointer"
                    onClick={editTodoHandler.bind(this, todo)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </div> */}
                  {/* <div>{todo.done ? <div>selesai</div> : <div>belum</div>}</div> */}
                  <div
                    className="cursor-pointer"
                    onClick={removeTodoHandler.bind(this, todo.id)}
                  >
                    <svg
                      className="fill-current"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                        fill=""
                      />
                      <path
                        d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                        fill=""
                      />
                      <path
                        d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                        fill=""
                      />
                      <path
                        d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                        fill=""
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>not task</div>
        )}
      </div>
    </div>
  );
};

export default ChatCard;
