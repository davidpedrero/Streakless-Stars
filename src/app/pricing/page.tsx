import Image from "next/image";
import doubleHung from '../../../public/double-hung.png';
import halfMultiPane from '../../../public/half-multi-pane.png';
import multiPane from '../../../public/multi-pane.png';
import casement from '../../../public/casement.png';
import twoPanelCasement from '../../../public/two-panel-casement.png';
import threePanelCasement from '../../../public/three-panel-casement.png';


export default function Pricing() {
  return (
    <>
      <div className='bg-blue-200 flex h-1/2 align-middle justify-center'>
        <div className='text-center w-1/2 text-blue-950'>
          <h2 className='p-8 text-5xl '>Pricing</h2>
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
          <div className="flexalign-middle justify-center pb-8">
            <div className='flex align-middle justify-center text-center'>
              <div className='flex justify-center'>
                <div className='bg-slate-900 grid grid-cols-2 text-fuchsia-50 text-4xl  max-sm:text-xs max-md:text-sm'>
                  <div className='border-solid border-2 p-16'>
                    <Image className="mr-auto ml-auto mb-8"
                      src={doubleHung}
                      alt="Double Hung Window Pic"
                      width={150}
                      height={150}
                    />
                    <h4 className="mb-1 max-lg:text-2xl">Double-Hung Window</h4>
                    <small className="text-slate-500 text-2xl max-md:text-xl">$15 - $25</small>
                  </div>
                  <div className='border-solid border-2 p-16'>
                    <Image className="mr-auto ml-auto mb-8"
                      src={halfMultiPane}
                      alt="Half Multi-Pane Window Pic"
                      width={150}
                      height={150}
                    />
                    <h4 className="mb-1 max-lg:text-2xl">Half Multi-Pane Window</h4>
                    <small className="text-slate-500 text-2xl max-md:text-xl">$18 - $27</small>
                  </div>
                  <div className='border-solid border-2 p-16'>
                    <Image className="mr-auto ml-auto mb-8"
                      src={multiPane}
                      alt="Doublt Hung Window Pic"
                      width={150}
                      height={150}
                    />
                    <h4 className="mb-1 max-lg:text-2xl">Multi-Pane Window</h4>
                    <small className="text-slate-500 text-2xl max-md:text-xl">$22 - $32</small>
                  </div>
                  <div className='border-solid border-2 p-16'>
                    <Image className="mr-auto ml-auto mb-8"
                      src={casement}
                      alt="Casement Window Pic"
                      width={150}
                      height={150}
                    />
                    <h4 className="mb-1 max-lg:text-2xl">Casement Window</h4>
                    <small className="text-slate-500 text-2xl max-md:text-xl">$10 - $20</small>
                  </div>
                  <div className='border-solid border-2 p-16'>
                    <Image className="mr-auto ml-auto mb-8"
                      src={twoPanelCasement}
                      alt="2-Panel Casement Window Pic"
                      width={150}
                      height={150}
                    />
                    <h4 className="mb-1 max-lg:text-2xl">2-Panel Casement Window</h4>
                    <small className="text-slate-500 text-2xl max-md:text-xl">$20 - $35</small>
                  </div>
                  <div className='border-solid border-2 p-16'>
                    <Image className="mr-auto ml-auto mb-8"
                      src={threePanelCasement}
                      alt="3-Panel Casement Window Pic"
                      width={150}
                      height={150}
                    />
                    <h4 className="mb-1 max-lg:text-2xl">3-Panel Casement Window</h4>
                    <small className="text-slate-500 text-2xl max-md:text-xl">$30 - $45</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}