import {React} from 'react'

export const FeaturedProducts = () => {
  
  return (
    <div className='w-[90%]  my-[5rem] mx-auto'>
        <div className='flex justify-between '>
            <div className=''>
              <h1>Featured Products</h1>
              <p>Tailored grocery suggestions just for you. Revolutionizing your shopping experience with personalized picks.</p>
            </div>
            <div className='flex '>
                <div>All</div>
                <div>|</div>
                <div>Fresh Fruits</div>
                <div>Milks & Dairies</div>
                <div>Meat</div>
                <div>Vegetables</div>
                
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}
export default FeaturedProducts;