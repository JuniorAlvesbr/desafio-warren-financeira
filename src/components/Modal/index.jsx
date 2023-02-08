import Modal from 'react-modal'

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const status = {
  solicitada: 5,
  processando: 50,
  concluida: 100
}

export default function ModalView({ modalIsOpen, setIsOpen, modalContent }) {
  const valor = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(modalContent.amount)

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className='w-96'>
        <h1 className='text-center uppercase text-3xl mb-10'>{modalContent.title}</h1>


        <div className="flex flex-col items-center mb-4">
          <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
            <div
              className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
              style={{ width: `${status[modalContent.status]}%` }}
            >
            </div>
          </div>

          <div className='flex justify-between w-full'>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Solicitada</span>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Processando</span>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Concluida</span>
          </div>
        </div>

        <div>
          <h2 className='text-2xl pt-5'>Transferido de</h2>
          <hr />
          <div className='flex justify-between'>
            <span className='capitalize'>{modalContent.from}</span>
            <span>{valor}</span>
          </div>

          <h2 className='text-2xl pt-5'>Para</h2>
          <hr />
          <div className='flex justify-between'>
            <span className='capitalize'>{modalContent.to}</span>
            <span>{valor}</span>
          </div>
        </div>

      </div>
    </Modal>
  )
}