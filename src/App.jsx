import './App.css'
import Footer from './components/Footer'

function App() {
const styleSection1 = "text-center p-4 m-0-auto"
  return (
    <>
      <main className="py-10">
        <section className={styleSection1}>
          <h1 className='text-3xl mb-8'>Chores ToDo List</h1>
          <div className="flex justify-between"> 
            <input className='border-green-500' type='checkbox' id='toggle' />
            <label htmlFor='toggle'>Show completed chores</label>
            <button className='p-1 w-10 h-10 border-[1px] border-solid border-red-400 text-white rounded'>X</button>
          </div>
        </section>
        <hr />
        <section className={styleSection1}>
          <div className="flex flex-col">
            <h2 className="text-2xl mb-4">Done :</h2>
            <form className='flex flex-col items-center'>
            <label className='m-2' htmlFor="input">Add Todo</label>
              <input className='mb-4 p-2 bg-transparent border-[1px] border-solid border-gray-600 rounded' type="text" id="input" />
              <button className='px-4 w-fit h-10 rounded-md text-black bg-sky-400' type="submit">Add Task</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
