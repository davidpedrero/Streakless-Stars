import Hero from './components/hero';

export default function Home() {
  return (
    <>
      <Hero />
      <div className='bg-blue-200 h-1/2 text-center'>
        <h2 className='p-12 text-center text-5xl text-blue-950'>Why Choose us?</h2>
        <div className="flex align-middle justify-center pb-8">
          <div className='flex align-middle justify-center text-center w-1/2'>
            <div className='flex justify-center'>
              <div className='bg-slate-900 grid grid-cols-2 text-fuchsia-50 text-4xl  max-sm:text-xs max-md:text-sm'>
                <div className='border-solid border-2 p-16'>
                  <h4 className="mb-1 max-lg:text-2xl">Cost</h4>
                  <small className="text-slate-500 text-2xl max-md:text-xl">Excellent window cleaning service for an affordable price is not a myth - it exists at Empire.</small>
                </div>
                <div className='border-solid border-2 p-16'>
                  <h4 className="mb-1 max-lg:text-2xl">Quality</h4>
                  <small className="text-slate-500 text-2xl max-md:text-xl">We pay great attention to the quality of our work, so before leaving, we always make sure that you are 100% satisfied with the result.</small>
                </div>
                <div className='border-solid border-2 p-16'>
                  <h4 className="mb-1 max-lg:text-2xl">Safety</h4>
                  <small className="text-slate-500 text-2xl max-md:text-xl">We are professional window cleaners, that is why we are taking safety very seriously. Our technicians go through extensive safety training and are using the most modern safety equipment.</small>
                </div>
                <div className='border-solid border-2 p-16'>
                  <h4 className="mb-1 max-lg:text-2xl">Experience</h4>
                  <small className="text-slate-500 text-2xl max-md:text-xl">At Empire Window Cleaning we want your experience with us to be the most pleasant. We always put the customer first, and that makes us first.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}