import BookForm from "../components/bookForm";

export default function Book() {
  return (
    <>
      <div className='bg-blue-200 flex h-1/2 align-middle justify-center'>
        <div className='text-center w-1/2 text-blue-950 m-8'>
          <div className="bg-gray-900 p-16 text-left rounded-xl mt-1">
            <BookForm />
          </div>
        </div>
      </div>
    </>
  )
}