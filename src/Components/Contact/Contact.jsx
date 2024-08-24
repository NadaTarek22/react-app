import { useEffect } from "react";

export function Contact(){

    useEffect( ()=>{
        document.addEventListener('keyup', function(){
            const userrr = document.querySelector('#userName');
            const userNameLabel = document.querySelector('#nameLabel');
            const ageInput = document.querySelector('#age');
            const userAgeLabel = document.querySelector('#ageLabel');
            const userPassInput = document.querySelector('#userPassword');
            const userPassLabel = document.querySelector('#passLabel');
            const userEmailInput = document.querySelector('#userEmail');
            const userEmailLabel = document.querySelector('#emailLabel');
            
            if(userrr.value != ''){
                userNameLabel.classList.add('keyDown')
            }else{
                userNameLabel.classList.remove('keyDown')
            }
            
            
            if(ageInput.value != ''){
                userAgeLabel.classList.add('keyDown')

            }else{
                userAgeLabel.classList.remove('keyDown')
            }

            if(userEmailInput.value != ''){
                userEmailLabel.classList.add('keyDown')

            }else{
                userEmailLabel.classList.remove('keyDown')
            }

            if(userPassInput.value != ''){
                userPassLabel.classList.add('keyDown')

            }else{
                userPassLabel.classList.remove('keyDown')
            }
        })

       }, [])



    return(
        <>

           <div className=" mmin-height pt-10">
                <div>
                    <h2 className="uppercase teal-clr text-center fs-25 mb-3">conatct section</h2>
                    <div className="mb-3 flex justify-center items-center ">
                    <div className="line me-3 bg-teal-clr "></div>
                    <i className="fa-solid fa-star teal-clr"></i>
                    <div className="line ms-3 bg-teal-clr "></div>
                </div>
                </div>

                <form className="mx-72  " >
                    <div className="relative mb-16 mt-20">
                        <input id="userName" type="text" placeholder="userName" name="userName" className=" focus:outline-none rounded-md w-100 border-b ps-4 pb-4" />
                        <label id="nameLabel"  for="userName" className="">userName : </label>

                    </div>
         
                    <div className="relative mt-16 mb-16">
                        <input  id="age" type="number" placeholder="userAge" name="age" className=" focus:outline-none rounded-md w-100 border-b ps-4 pb-4" />
                        <label id="ageLabel" for="age" className="">userAge : </label>

                    </div>

                    <div className="relative mt-16 mb-16">
                        <input  id="userEmail" type="email" placeholder="userEmail" name="userEmail" className=" focus:outline-none rounded-md w-100 border-b ps-4 pb-4" />
                        <label id="emailLabel" for="userEmail" className="">userEmail : </label>

                    </div>

                    <div className="relative mt-16 mb-7 ">
                        <input  id="userPassword" type="password" placeholder="userPassword" name="userPassword" className=" focus:outline-none rounded-md w-100 border-b ps-4 pb-4" />
                        <label id="passLabel" for="userPassword" className=" ">userPassword : </label>

                    </div>

                    <div>
                        <button  className="rounded-md mt-4 mb-10  text-white main-background btnn"> send Message </button>
                    </div>
                </form>
            </div>
        
        </>
    )
}