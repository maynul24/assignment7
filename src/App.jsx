import './App.css'
import Navber from './Navber/Navber'
import Recipes from './Recipes/Recipes'
import Sidebar from './Sidebar/Sidebar'

function App() {


  return (
    <div className='max-w-[1320px] m-auto font-[lexend]'>
    <Navber></Navber>
    <div className='flex flex-col hero-section items-center justify-center  text-white'>
        <h2 className='max-w-[897px] text-[52px] font-bold mb-6'>Delicious and Easy Recipes for Every Occasion | Your Ultimate Recipe Hub</h2>
        <p className='text-[18px] max-w-[933px] text-center mb-10'>Whether you're looking for quick weeknight dinners, healthy meals, or indulgent treats, our collection of easy-to-follow recipes will inspire your next culinary creation.</p>
        <div className='flex gap-6'>
          <button className='bg-[#0BE58A] py-5 px-[30px] text-[20px] font-semibold text-black rounded-full'>Explore Now</button>
          <button className='border-2 py-5 px-[30px] text-[20px] font-semibold text-white rounded-full'>Our Feedback</button>
        </div>
    </div>
    <div>
      <Recipes></Recipes>
      <Sidebar></Sidebar>
    </div>

    </div>
  )
}

export default App
