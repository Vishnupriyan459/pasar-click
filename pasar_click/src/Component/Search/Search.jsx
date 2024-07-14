import {React,useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom';
import { fetchProducts } from '../../ProductAPI';
import { fetchVendors } from '../../Vendorapi';
import MainCatagories from './MainCatagories';
import SubCatagories from './SubCatagories';


const Search = () => {
  const [Products,setProducts]=useState([]);
  const [Filterproduct,setFilterproduct]=useState([])
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query');
  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProducts();
        
        setProducts(data);
      } catch (error) {
        console.error('Error fetching the product data:', error);
      }
    };

    getProduct();
  }, []);
  return (
    <>
      {/* <div>Search "{searchQuery}"</div> */}
      <div className='bg-Search_bg h-[100vh] w-[100vw] '>
      <div className=' w-[95%] mx-auto  '>
        <div className=''>
          <div className='flex  flex-col tablet:gap-5 tablet:flex-row' >
            <div className='font-[400] text-[16px] tablet:text-[36px] text-[#364A15] leading-[46.99px]'>Search results for <span className='italic'>"</span> {searchQuery} <span className='italic'>"</span></div>
            <div className='self-start tablet:self-end text-[8px] tablet:text-[14px] leading-[18.27px]'>Showing 1-{7} of  {48} result</div>

          </div>
          <div className='mt-5 flex flex-col gap-5'>
            <div><MainCatagories /></div>
            <div><SubCatagories /></div>

          </div>
          
        </div>
        <div className='bg-[rgba(255,255,255,0.2)] w-[50%] h-[50%]'>
          
        </div>
      </div>
      </div>
    </>
    
  )
}

export default Search;