import FilterComp from "../FilterComp/FilterComp"
import "./home.css"
import { data, product_categories } from '../../data'; // importing from data.js
import ProductItem from "../ProductItems/ProductItem";
import { useState } from "react";


function Home() {
    // This is a state variable made for toggling mobile menu
    let [mobileToggleMenu,setToggleMenu] = useState(()=> false );

    // Function for handling 'mobileToggleMenu' variable's toggling
    function mobileMenuHandler(e) {

        setToggleMenu((prev) => (
            prev = !prev
        ))

    }




    return (
        
        <>  
            {/* Filter component on the left hand side  */}
            <div className="left-div hidden md:block col-span-2 lg:col-span-1 bg-[#292929] min-h-full " >
                <FilterComp/>
            </div>
            {/* End of filter component */}


            {/* Contents (Product Companies and their goods on the right hand side) */}
            <div className="right-div py-4 px-2 bg-[#292929] md:p-10 col-span-4 lg:col-span-2 xl:col-span-3" >

                {/* Header section */}
                <div className="content-header relative p-6 bg-[#292929] flex justify-between items-center ">
                    <div>
                        <h1 className = "text-6xl text-[#FFFFFFDE]" > Edvora</h1>
                        <h2 className = "mt-6 text-5xl text-[#FFFFFF80]" > Products </h2>
                    </div>
                    <i className="fas fa-bars cursor-pointer  text-slate-50 text-5xl md:hidden" onClick={mobileMenuHandler}/>
                    <div className = {mobileToggleMenu 
                        ? "absolute  top-[68%] right-0 w-full  md:hidden "
                        :  " hidden md:hidden "}
                    >
                        <FilterComp/>
                    </div>
                </div>

                {/* products  */}
                <div className="products-container bg-[#292929] mt-4 max-h-full p-4">
                    
                    {product_categories.map((elem, idx)=> (
                        <div key={idx} className="product-company bg-[#292929] my-4 py-4">
                            <h3 className="text-4xl text-[#FFFFFF] font-[400] py-6 px-2 mb-6 border-b-2 border-gray-500"> {elem} </h3>
                            <div className = "overflow-x-hidden w-full rounded-2xl px-8 bg-[#131313]">
                                <div className="product-item-container w-auto bg-[#131313] my-2 flex ">

                                {data.map((item,index)=> (
                                        item.product_name === elem ?
                                        (<div key={index} className="product-item min-w-[20rem] m-8 flex-shrink-0">
                                            <ProductItem info={item}/>
                                        </div>) : null
                                ))}

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                        
                

                
            </div>
            {/* End of Product Section */}

        </>
    )
}

export default Home
