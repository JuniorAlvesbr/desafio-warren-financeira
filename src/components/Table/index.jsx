export default function Table({ database, setIsOpen, setModalContent }) {
  const handleClick = (item) => {
    setIsOpen(true)
    setModalContent(item)
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Título</th>
            <th scope="col" className="px-6 py-3">Descrição</th>
            <th scope="col" className="px-6 py-3">Status</th>
            <th scope="col" className="px-6 py-3">Valor</th>
          </tr>
        </thead>

        <tbody>
          {database && database.map((item, index) =>
            <tr key={index} className="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              onClick={() => handleClick(item)}
            >
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.title}
              </th>
              <td className="px-6 py-4">{item.description}</td>
              <td className="px-6 py-4">{item.status}</td>
              <td className="px-6 py-4">{item.amount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  )
}