import "./productitem.css"

function ProductItem({info}) {
    return (
        <div className = "ProductItem grid grid-rows-2 bg-[#292929] rounded-lg h-auto ">

        <div className="image-brand-div flex justify-center p-4 ">
           
            <img src={info.image} alt="" className="col-span-1 w-24 h-24 p-6 bg-slate-50 rounded-md " />
            
            <div className="price">

               <div className="grid grid-rows-3 px-6">
                    <h3 className=" text-2xl py-1 font-[400] text-[#FFFFFF]" >{ info.product_name }</h3>
                    <p className=" text-[1.5rem] py-1 text-[#FFFFFF80]" > { info.brand_name } </p>
                    <p className=" text-[1.5rem] py-1  font-bold text-[#FFFFFF]" > $ { info.price } </p>
               </div>

            </div>

        </div>

        <div className="description-div mt-4">
            <div className="date_and_loc flex justify-between">
                <p className="px-8 text-[1.5rem] text-[#FFFFFF80] "> Locaton: <br /> {info.address.state}, {info.address.city} </p>
                <p className="px-8 text-[1.5rem] text-[#FFFFFF80]  font-semibold"> Date: { `${info.time}`.slice(11,19) } </p>
            </div>
            <div className="descc mt-8">
                <p className="px-8 text-xl mb-4 text-[#FFFFFF80] "> {info.discription}</p>
            </div>
        </div>
            
        </div>
    )
}

export default ProductItem
