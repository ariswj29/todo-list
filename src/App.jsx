import './App.css'
import Footer from './components/Footer'
import { useState } from 'react'

class TodoItem {
  constructor(todo) {
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
      <div className="container grid grid-rows-1 min-h-[100vh]">
        <main className='grid grid-rows-2 p-12 text-center'>
          <div className='col-auto'>
            <h1 className='text-3xl mb-8'>Chores ToDo List</h1>
            {allTodoList.length === 0 && <p className='text-xl'>Todo is empty!</p>}
            {allTodoList 
            .map((item, index) => (
              <div key={index} className='grid grid-cols-3 gap-4 mb-4 items-center'>
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
                <ul className='justify-self-start'>
                  <li className={`p-2 mb-2 ${item.isDone ? 'line-through' : ''}`}>{item.todo}</li>
                </ul>  
                <button 
                  className='p-1 w-10 h-10 border-[1px] border-solid border-red-400 text-white rounded'
                  onClick={() => {
                    const deleteddList = allTodoList.filter((_, i) => i !== index)
                    setAllTodoList(deleteddList)
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <div className='col-auto'>
            <h2 className='text-2xl mb-4'>Done : {countTodoDone}</h2>
            <form>
              <input name='todo' type='text' placeholder='Add Todo' className='bg-transparent p-2 mb-2' />
              <button 
                className='bg-blue-500 text-white p-2' 
                onClick={addTodo}
              >
                  Add Todo
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
