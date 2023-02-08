import { useEffect, useState } from 'react'
import Header from './components/Header'
import ModalView from './components/Modal'
import SearchBar from './components/SearchBar'
import Select from './components/Select'
import Table from './components/Table'

import db from './database/db'

function App() {
  const [database, setDatabase] = useState('')
  const [search, setSearch] = useState('')
  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalContent, setModalContent] = useState('')

  useEffect(() => {
    setDatabase(db)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    const filter = db.filter(item => item.title.includes(search))

    if (!filter.length) {
      alert('Titulo não encontrado')
      return
    }

    setDatabase(filter)
    return

  }

  const handleStatus = (event) => {
    const status = event.target.value

    const filter = db.filter(item => item.status.includes(status))

    if (!filter.length) {
      setDatabase(db)
      return
    }

    setDatabase(filter)
    return
  }

  return (
    <>
      <Header />
      <main>

        <section>
          <form className="flex justify-around max-w-3xl pt-5">
            <SearchBar setSearch={setSearch} handleSubmit={handleSubmit} />
            <Select handleStatus={handleStatus} />
          </form>
        </section>

        <section className='pt-10 px-24'>
          <Table database={database} setIsOpen={setIsOpen} setModalContent={setModalContent} />
        </section>

        <ModalView modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} modalContent={modalContent} />
      </main>
    </>
  )
}

export default App

