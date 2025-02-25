import Image from 'next/image'

import gold from '../../assets/medalGold.png'
import silver from '../../assets/medalSilver.png'
import cooper from '../../assets/medalCooper.png'

export function Ranking () {
    return (
        <div className='w-full max-w-[440px] space-y-5'>
                <h2 className='text-gray-200 text-xl font-heading font-semibold leading-none'>
                    Ranking de indicações
                </h2>
                <div className='space-y-4'>
                    <div className='relative rounded-xl bg-gray-700 border border-gray-600 p-8 flex flex-col justify-center'>
                        <span className='text-sm text-gray-300 leading-none'>
                            <span className='font-bold'>1º</span>
                            Hudson cleiton
                        </span>

                        <span className='font-heading text-2xl font-semibold text-gray-200 leading-none'>
                            1500
                        </span>
                        <Image src={gold} alt='medalha de ouro' className='absolute top-0 right-8'/> 
                    </div>
                    <div className='relative rounded-xl bg-gray-700 border border-gray-600 p-8 flex flex-col justify-center'>
                        <span className='text-sm text-gray-300 leading-none'>
                        <span className='font-bold'>2º</span>
                            Hudson cleiton
                        </span>

                        <span className='font-heading text-2xl font-semibold text-gray-200 leading-none'>
                            1000
                        </span>
                        <Image src={silver} alt='medalha de ouro' className='absolute top-0 right-8'/> 
                    </div>
                    <div className='relative rounded-xl bg-gray-700 border border-gray-600 p-8 flex flex-col justify-center'>
                        <span className='text-sm text-gray-300 leading-none'>
                        <span className='font-bold'>3º</span>
                            Hudson cleiton
                        </span>

                        <span className='font-heading text-2xl font-semibold text-gray-200 leading-none'>
                            500
                        </span>
                        <Image src={cooper} alt='medalha de ouro' className='absolute top-0 right-8'/> 
                    </div>                    
                </div>
            </div>
    )
}
export default Ranking