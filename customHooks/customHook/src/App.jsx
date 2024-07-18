import { useState } from 'react'
import {InputBox} from './components'

import useCurrencyInfo from './hooks/useCurrencyInfo'
import background from './assets/bgImg.jpg'


function App() {
  const [amount, setAmount] = useState()
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("npr")

  const[convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)
  
  const swap = ()=>{
    setFrom(to)
    setTo(from)

    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = function(){
      setConvertedAmount(amount * currencyInfo[to])
  }
  return(
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' >
        <div className='w-full h-screen bg-cover bg-no-repeat absolute' style={{
          backgroundImage: `url(${background})`,
          opacity: 0.8
        }}></div>
        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm
          bg-white/30'>

            <form 
              onSubmit={(e)=>{
                e.preventDefault();
                convert()
              }}  
            >
              <div className='w-full  mb-1'>

                 <InputBox
                    label='From'
                    amount={amount}
                    currencyOptions = {options}

                    onCurrencyChange = {(currency)=> setAmount(amount)}

                    selectCurrrency={from}
                    onAmountChange={(amount) => setAmount(amount)}


                 />
                 
              </div>

              <div className='relative w-full h-0.5'>

                <button
                  type='button'
                  className='absolute left-1/2 
                  -translate-x-1/2 -translate-y-1/2
                  border-2 border-white rounded- md
                  bg-blue-600 text-white px-2 py-0.5'

                  onClick={swap}
                >
                  Swap
                </button>

              </div>
                  
              <div className='w-full  mb-1 mt-1'>

                  <InputBox
                    label='To'
                    amount={convertedAmount}
                    currencyOptions = {options}

                    onCurrencyChange = {(currency)=>{
                      setTo(currency)
                    }}  
                    selectCurrrency={from}
                    amountDisable
                  />

              </div>
              <button
                  type='submit'
                  className='w-full 
                   rounded-lg
                   bg-blue-600 text-white px-4 py-3'

                  onClick={convert}
                >
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>        

            </form>
          </div>

        </div>

    </div>
  )
}

export default App
