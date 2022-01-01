import "./filtercomp.css"
import { data } from '../../data'; // importing data from data.js
import { useState } from "react";


    // array for aquiring all the states
    const statesArr = [];
    data.map((item)=> (
        statesArr.includes(item.address.state) ? null : statesArr.push(item.address.state)
    ))
    
    //array for aquiring all the cities 
    const citiesArr = [];
    data.map((item)=> (
        citiesArr.includes(item.address.city) ? null : citiesArr.push(item.address.city)
    ))

    // initialising  the arrays for filtering based o dropdown items selection (products/states)
    let filteredProvinces = [];
    let filteredCities = [];

    function FilterComp() {



    let [prodBtn,setProdBtn] = useState(()=> false);
    let [stateBtn,setStateBtn] = useState(()=> false);
    let [cityBtn,setCityBtn] = useState(()=> false);
    let [statesArray,setStatesArray] = useState(()=>statesArr);
    let [citiesArray,setCitiesArray] = useState(()=>citiesArr);


    // console.log(prodBtn);
    

    // filtering the states based on selection of products and states from dropdown menu
    async function productChoiceHandler(e) {
        
        

        filteredProvinces = [];
        data.filter((item)=> (item.product_name === e)).map((e)=> (
            filteredProvinces.includes(e.address.state) 
            ? null 
            : filteredProvinces.push(e.address.state)
        ))
        
        setStatesArray((prev)=> (
            prev = filteredProvinces
        ))
        
        // console.log( filteredProvinces );
        
        

    }
    
    // filtering the  cities based on selection of products and states from dropdown menu
    function provinceChoiceHandler(e) {
 
        filteredCities = [];
        data.filter((item)=> (item.address.state === e)).map((e)=> (
            filteredCities.includes(e.address.city) 
            ? null 
            : filteredCities.push(e.address.city)
        ))
        
        setCitiesArray((prev)=> (
            prev = filteredCities
        ))
        

    }

    // Handler for toggling dropdown filter menu categories
    function dropdownHandler(e) {
        
        let trigger = e.target.innerText
        // console.log(trigger);

        if(trigger === "Products") {

            setProdBtn((prev)=> (
                prev = !prev
            ));

        }
        else if(trigger === "State") {

            setStateBtn((prev)=> (
                prev = !prev
            ));

        }
        else if(trigger === "City") {

            setCityBtn((prev)=> (
                prev = !prev
            ));

        }
    }





    return (
        <div className = "FilterComp rounded-md md:rounded-[2rem] min-h-[80vh] bg-[#131313] md:w-[90%] mx-auto lg:mx-auto my-10 md:px-8  lg:px-10 py-20 ">
            <p className = "filter-header text-[#A5A5A5] text-4xl px-6  pb-6 border-b-2 border-gray-500 "> Filters</p>

            <div className="filter-categories w-[85%] m-auto">
                {/* ---------------Start of Products dropdown -------------------------------------- */}
                <div
                    onClick={dropdownHandler} 
                    className="products flex justify-between rounded-xl p-5 my-5 bg-[#232323] cursor-pointer"
                >
                    <p className = "text-3xl   text-[#FFFFFF]"> Products</p>
                    <img className="h-[100%] my-auto" src="./images/icons/down.png" alt="" />

                </div>
                <div className={prodBtn ? "products-dropdown bg-[#131313] " : "hidden"}>

                    {data.map((item,index)=> (
                        <p 
                            key={index}
                            onClick={()=> productChoiceHandler(item.product_name)}
                            className = "text-xl text-[#FFFFFF] px-4 py-2 font-semibold mx-2 my-3 rounded-lg cursor-pointer bg-[#232323]">
                             {item.product_name}
                        </p>
                    ))}

                </div>
                {/* ---------------End of Products dropdown -------------------------------------- */}

                {/* ---------------Start of States dropdown -------------------------------------- */}
                <div 
                    onClick={dropdownHandler} 
                    className="states flex justify-between rounded-xl p-5 my-5 bg-[#232323] cursor-pointer"
                >
                    <p className = "text-3xl  text-[#FFFFFF]">State</p>
                    <img className="h-[100%] my-auto" src="./images/icons/down.png" alt="" />

                    
                </div>
                <div className={stateBtn ? "states-dropdown bg-[#131313] " : "hidden"}>

                    
                    {   
                        (statesArray.map((item,index)=> (
                            <p 
                                key={index}
                                onClick={()=> provinceChoiceHandler(item)}
                                className = "text-xl text-[#FFFFFF] px-4 py-2 font-semibold mx-2 my-3 rounded-lg cursor-pointer bg-[#232323]">
                                {item}
                            </p>
                        )))
                    
                    }

                </div>
                {/* ----------------------------End of States Dropdown----------------------------- */}


                {/* ----------------------------Start of Cities Dropdown----------------------------- */}
                <div
                    onClick={dropdownHandler}  
                    className="cities flex justify-between rounded-xl p-5 my-5 bg-[#232323] cursor-pointer"
                >
                    <p className = "text-3xl  text-[#FFFFFF]" >City</p>
                    <img className="h-[100%] my-auto" src="./images/icons/down.png" alt="" />

                </div>
                <div className={cityBtn ? "cities-dropdown bg-[#131313] " : "hidden"}>

                    {citiesArray.map((item,index)=> (
                        <p 
                            // onClick={()=> cityChoiceHandler(item.address.city)}
                            key={index}
                            className = "text-xl text-[#FFFFFF] px-4 py-2 font-semibold mx-2 my-3 rounded-lg  bg-[#232323]">
                             {item}
                        </p>
                    ))}

                </div>

                {/* ----------------------------End of Cities dropdown---------------------------- */}

            </div>

            
        </div>
    )
}

export default FilterComp
