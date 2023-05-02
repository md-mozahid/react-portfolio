import image from '../assets/img/banner-01.png'
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'

const Home = () => {
  return (
    <div className='container grid grid-cols-3 p-10 h-screen'>
      <div className='col-span-2'>
        <div>
          <p>welcome to my world</p>
          <h1 className='text-4xl'>
            Assalamualaikum, I`m <span className='text-rose-500'>Md. Mozahid</span>
          </h1>
          <h2 className='text-3xl pb-5'>a Web Developer</h2>
          <p>
            I use animation as a third dimension by which to simplify
            experiences and kuching thro each and every interaction. I`m not
            adding motion just to spruce things up, but doing it in ways that.
          </p>
        </div>
        <div>
          <div>
            <p>find with me</p>
            <ul>
                <a href=""><FiFacebook /></a>
                <a href=""><FiInstagram /></a>
                <a href=""><FiLinkedin /></a>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
      <div>
        <img className='max-w-lg' src={image} alt="Banner image" />
      </div>
    </div>
  )
}

export default Home