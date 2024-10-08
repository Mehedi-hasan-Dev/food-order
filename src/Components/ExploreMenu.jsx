
import { menu_list } from './../assets/assets'

const ExploreMenu = ({category,setCategory}) => {


 

  return (
    <div className='flex flex-col gap-5 container'>
      <h1 className='text-3xl text-[#262626] font-medium'>Explore our menu</h1>
      <p className='md:max-w-[60%] text-[#808080]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae fugiat, earum culpa molestiae vel nostrum?</p>
      <div className='flex flex-wrap lg:flex-nowrap justify-start md:justify-between items-center gap-8 text-center my-5 overflow-x-scroll no-scrollbar'>
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=> setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className=''>

                    <img className={`w-[7.5vw] min-w-20 cursor-pointer rounded-full ${category === item.menu_name ? "menu-active" : ""}`} 
                     src={item.menu_image} />

                    <p className='mt-2 text-[#747474] text-base cursor-pointer'>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr className='my-2 h-[2px] bg-[#e2e2e2] border-none' />
    </div>
  )
}

export default ExploreMenu
