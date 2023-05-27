import Image from 'next/image'
import AuthForm from './components/AuthForm'

export default function Home() {
  return (
    <main className="
      flex
      min-h-screen
      flex-col
      justify-center
      py-12
      sm:px-6
      lg:px-8
      bg-gray-100  
      text-gray-900
    ">
      <div
        className='sm:mx-auto sm:w-full sm:max-w-md'
      > 
        <Image
          alt='Logo'
          height={48}
          width={48}
          src={'/images/logo.png'}
          className='mx-auto w-auto'
        />
        <h2
          className='mt-6 text-center text-3xl font-bold tracking-light'
        >
          Sign in to your account
        </h2>
      </div>
      <AuthForm/>
    </main>
  )
}
