export default function Pricing() {
  return (
    <>
      <div className='bg-blue-200 flex h-1/2 align-middle justify-center'>
        <div className='text-center w-1/2'>
          <h2 className='p-8 text-5xl'>Pricing</h2>
          <div className='text-left pb-8'>
            <p className="mb-4 text-2xl">The price depends on different factors, like:</p>
            <ul className="list-disc pl-8 text-2xl">
              <li>level of contamination</li>
              <li>window size</li>
              <li>glass access difficulty</li>
              <li>plane or multi-plane glass</li>
              <li>efforts to maintain safe work</li>
            </ul>
            <p className="mt-4 text-2xl">Below you can see examples of prices for regular cleaning of standard-sized windows. Please note, that all services are subject to a minimum charge of $100.00 + tax:</p>
          </div>
        </div>
      </div>
      <div className="flex h-1/2 align-middle justify-center pb-8">
        <div className='flex align-middle justify-center text-center'>
          <div className='flex justify-center'>
            <div className='bg-slate-900 grid grid-cols-2 text-fuchsia-50 text-4xl max-sm:text-xs max-md:text-sm max-lg:text-base'>
              <div className='border-solid border-2 p-16'>Cost</div>
              <div className='border-solid border-2 p-16'>Quality</div>
              <div className='border-solid border-2 p-16'>Safety</div>
              <div className='border-solid border-2 p-16'>Experience</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}