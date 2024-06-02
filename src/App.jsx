import './App.css'
import Footer from './components/Footer'
import { useState } from 'react'

class TodoItem {
  constructor(todo) {
    this.id = Math.random()
    this.todo = todo
    this.isDone = false
  }
}

const App = () => {
  const [allTodoList, setAllTodoList] = useState([])
  const countTodoDone = allTodoList.filter((todo) => todo.isDone).length
  
  const addTodo = (e) => {
    e.preventDefault()
    const todoText = e.target.form.todo.value
    const newTodo = new TodoItem(todoText)
    setAllTodoList([...allTodoList, newTodo])
    e.target.form.todo.value = ''
  }

  return (
    <>
      <div className="container grid grid-rows-1 h-full">
        <main className='grid grid-rows-3 sm:w-3/6 w-full justify-self-center p-12'>
          <div className='col-auto row-span-2'>
            <h1 className='text-3xl mb-8 text-center'>Chores ToDo List</h1>
            {allTodoList.length === 0 && <p className='text-xl text-center'>Todo is empty!</p>}
            <div className='overflow-y-auto max-h-96'>
              {allTodoList 
              .map((item, index) => (
                <div key={index} className='grid grid-cols-6 gap-4 mb-4 items-center'>
                  <input 
                    className='p-1 w-5 h-5 border-[1px] border-solid border-lime-400 rounded justify-self-end' 
                    type='checkbox' 
                    checked={item.isDone} 
                    onChange={() => {
                      const updatedList = allTodoList.map((todo, i) => {
                        if (i === index) {
                          return { ...todo, isDone: !todo.isDone }
                        }
                        return todo
                      })
                      setAllTodoList(updatedList)
                    }}
                  />
                  <ul className='col-span-4 justify-self-start'>
                    <li className={`p-2 mb-2 ${item.isDone ? 'line-through' : ''}`}>{item.todo}</li>
                  </ul>  
                  <button 
                    className='p-1 w-10 h-10 border-[1px] border-solid border-red-300 text-white rounded'
                    onClick={() => {
                      const deleteddList = allTodoList.filter((_, i) => i !== index)
                      setAllTodoList(deleteddList)
                    }}
                  >
                    <i className="fa-solid fa-trash-can text-red-300"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className='col-auto self-center sm:self-end'>
            <h2 className='text-2xl text-center'>Done : {countTodoDone}</h2>
            <form className='flex flex-col item-center'>
              <input name='todo' type='text' placeholder='Add Todo' className='p-2 my-4 bg-transparent border-2 border-solid border-slate-600 rounded-md ' />
              <button 
                className='bg-blue-300 text-black font-medium p-2 w-28 rounded-md' 
                onClick={addTodo}
              >
                  ADD TASK
              </button>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
