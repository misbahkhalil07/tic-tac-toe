import { Player } from "../types/type";
const Board: React.FC<{board: Player[]; onClick: (index: number) => void;}> = ({ board, onClick }) => (
    <div className='flex justify-center items-center'>
    <div className='grid grid-cols-3 border border-black p-2 bg-[#914a2c]  rounded-md'>
      {board.map((cell, index) => (
        <div
          key={index}
          className='w-14 h-14 border font-semibold text-3xl border-black bg-[#f59542]  flex justify-center items-center m-2 cursor-pointer'onClick={() => onClick(index)}
        >
          {cell}
          </div>
            ))
        }
    </div>
    </div>
  )

export default Board;