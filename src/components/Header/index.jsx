import reactLogo from '../../assets/react.svg'
import './styles.css'

export default function Header() {
  return (
    <header className='flex justify-between items-center bg-purple-800'>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </a>

      <h1 className='text-white uppercase text-xl'>
        Lista de Transações
      </h1>

      <a href="https://reactjs.org" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </header>
  )
}