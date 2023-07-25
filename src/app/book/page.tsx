export default function Book() {
  return (
    <>
      <div className='bg-blue-200 flex h-1/2 align-middle justify-center'>
        <div className='text-center w-1/2 text-blue-950'>
          <h2 className='p-8 text-5xl'>Book Appointment!</h2>
          <div className='text-left pb-8'>
            <form className="">
              <label htmlFor="name">Your name</label>
              <input id="name" className="mb-4" />
              <br></br>
              <label htmlFor="email">Your email</label>
              <input id="enail" className="mb-4" />
              <br></br>
              <input type="submit" className="bg-blue-600 text-white p-2 rounded-md mt-4 cursor-pointer" />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}