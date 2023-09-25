import React from 'react';
import Modal from 'react-modal';
import LinkPoke from './LikePoke';

function FavPoke({ fav, isOpen, closeModal, poke }) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Pokemon Info Modal"
        ariaHideApp={false}

      >
        <div className='flex justify-end'>
          <button
            type="button"
            onClick={closeModal}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-10 h-10 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-7 h-7"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      < h3 className='text-3xl mt-5 mb-10 font-semibold text-center'>Your Faverite Pokemon</h3>
        <div className='px-20 min-h-screen'>
          <div className='grid grid-cols-4 bg-amber-100 text-lg font-semibold rounded-xl shadow-xl'>
            {fav?.map((data, idx) => (
              <div className='my-5' key={idx}>
                <h3 className='my-3 ms-16'>{data.name}</h3>
                <img className='w-60 bg-amber-200 rounded-xl shadow-xl cursor-pointer hover:bg-amber-300' src={data?.sprites.front_default} alt={data.name} />
                <div className='ms-28 my-5'>
                  <LinkPoke />
                </div>
              </div>
            ))}
          </div>
        </div>


      </Modal>
    </div>
  );
}

export default FavPoke;
