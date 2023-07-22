import Hero from './components/hero';

export default function Home() {
  return (
    <>
      <Hero />
      <div className='bg-blue-200 h-1/2 text-center'>
        <h2 className='p-12 text-center text-5xl text-slate-900 font-extralight'>Why Choose us?</h2>
        <div className='flex align-middle justify-center'>
          <div className='flex justify-center'>
            <div className='grid grid-cols-2 text-fuchsia-50 text-4xl max-sm:text-xs max-md:text-sm max-lg:text-base'>
              <div className='border-solid border-2 bg-amber-600 p-12'>Cost</div>
              <div className='border-solid border-2 bg-red-700 p-12'>Quality</div>
              <div className='border-solid border-2 bg-blue-600 p-12'>Safety</div>
              <div className='border-solid border-2 bg-green-500 p-12'>Experience</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}