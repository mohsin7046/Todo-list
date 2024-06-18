import React, { useState } from 'react'
import { useTodo } from '../../context/Todocontext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const notify = () => {
        
        if(todo==="")  toast.warn("Todo is empty!!");
        else toast.success("Todo is Added Succesfully!!");
    }
   
    const add = (e) => {
      e.preventDefault()

      if (!todo) return

      addTodo({ todo, completed: false})
      setTodo("")
    }

  return (
      <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 dark:placeholder:text-black text-black font-semibold"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-black pb-[6px] pt-2 text-xs transition hover:border-success-600 50 focus:border-success-600 focus:bg-success-50/50 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 motion-reduce:transition-none dark:focus:bg-green-950"
          onClick={notify}
          >
              Add
          </button>
          <ToastContainer 
        
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="dark"
          />
      </form>
  );
}
export default TodoForm;