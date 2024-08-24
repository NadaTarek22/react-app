import { useEffect } from "react";

export function Portfolio(){

	useEffect(()=>{


	
		const modal = document.querySelector('.main-modal');
		const closeButton = document.querySelectorAll('.modal-close');
	
		const modal2 = document.querySelector('.main-modal2');
		const closeButton2 = document.querySelectorAll('.modal-close2');

		const modal3 = document.querySelector('.main-modal3');
		const closeButton3 = document.querySelectorAll('.modal-close3');
	
		const modal4 = document.querySelector('.main-modal4');
		const closeButton4 = document.querySelectorAll('.modal-close4');
	
		const modal5 = document.querySelector('.main-modal5');
		const closeButton5 = document.querySelectorAll('.modal-close5');
		const modal6 = document.querySelector('.main-modal6');
		const closeButton6 = document.querySelectorAll('.modal-close6');


		const mdl1o= document.querySelector('#modall1');
		const mdl1c= document.querySelector('#modallc1');

		const mdl2o= document.querySelector('#modall2');
		const mdl2c= document.querySelector('#modallc2');
		const mdl3o= document.querySelector('#modall3');
		const mdl3c= document.querySelector('#modallc3');
		const mdl4o= document.querySelector('#modall4');
		const mdl4c= document.querySelector('#modallc4');
		const mdl5o= document.querySelector('#modall5');
		const mdl5c= document.querySelector('#modallc5');
		const mdl6o= document.querySelector('#modall6');
		const mdl6c= document.querySelector('#modallc6');


		mdl1o.addEventListener('click', function(){
			modal.classList.remove('fadeOut');
			modal.classList.add('fadeIn');
			modal.style.display = 'flex';
		})

		mdl1c.addEventListener('click',function(){
			modal.classList.remove('fadeIn');
			modal.classList.add('fadeOut');
			setTimeout(() => {
				modal.style.display = 'none';
			}, 500);
		})

		for (let i = 0; i < closeButton.length; i++) {

			const elements = closeButton[i];

			elements.onclick = (e) => {
				modal.classList.remove('fadeIn');
				modal.classList.add('fadeOut');
				setTimeout(() => {
					modal.style.display = 'none';
				}, 500);
			};

			modal.style.display = 'none';

			window.onclick = function (event) {
				if (event.target == modal){
					modal.classList.remove('fadeIn');
				modal.classList.add('fadeOut');
				setTimeout(() => {
					modal.style.display = 'none';
				}, 500);
				};
			}
		}


		
		mdl2c.addEventListener('click',function(){
			modal2.classList.remove('fadeIn');
			modal2.classList.add('fadeOut');
			setTimeout(() => {
				modal2.style.display = 'none';
			}, 500);
		})
			
		
		mdl2o.addEventListener('click',function(){
			modal2.classList.remove('fadeOut');
			modal2.classList.add('fadeIn');
			modal2.style.display = 'flex';
		})

		for (let i = 0; i < closeButton2.length; i++) {

			const elements = closeButton2[i];

			elements.onclick = (e) => {
				modal2.classList.remove('fadeIn');
				modal2.classList.add('fadeOut');
				setTimeout(() => {
					modal2.style.display = 'none';
				}, 500);
			};

			modal2.style.display = 'none';

			window.onclick = function (event) {
				if (event.target == modal2){
					modal2.classList.remove('fadeIn');
				modal2.classList.add('fadeOut');
				setTimeout(() => {
					modal2.style.display = 'none';
				}, 500);
				};
			}
		}





		mdl3c.addEventListener('click',function(){
			modal3.classList.remove('fadeIn');
			modal3.classList.add('fadeOut');
			setTimeout(() => {
				modal3.style.display = 'none';
			}, 500);
		})
        
		mdl3o.addEventListener('click',function(){
			modal3.classList.remove('fadeOut');
			modal3.classList.add('fadeIn');
			modal3.style.display = 'flex';
		})

		for (let i = 0; i < closeButton3.length; i++) {

			const elements = closeButton3[i];

			elements.onclick = (e) => {
				modal3.classList.remove('fadeIn');
				modal3.classList.add('fadeOut');
				setTimeout(() => {
					modal3.style.display = 'none';
				}, 500);
			};

			modal3.style.display = 'none';

			window.onclick = function (event) {
				if (event.target == modal3){
					modal3.classList.remove('fadeIn');
				modal3.classList.add('fadeOut');
				setTimeout(() => {
					modal3.style.display = 'none';
				}, 500);
				};
			}
		}



        mdl4c.addEventListener('click',function(){
			modal4.classList.remove('fadeIn');
			modal4.classList.add('fadeOut');
			setTimeout(() => {
				modal4.style.display = 'none';
			}, 500);
		})
        
		
		mdl4o.addEventListener('click',function(){
			modal4.classList.remove('fadeOut');
			modal4.classList.add('fadeIn');
			modal4.style.display = 'flex';
		})
		for (let i = 0; i < closeButton4.length; i++) {

			const elements = closeButton4[i];

			elements.onclick = (e) => {
				modal4.classList.remove('fadeIn');
				modal4.classList.add('fadeOut');
				setTimeout(() => {
					modal4.style.display = 'none';
				}, 500);
			};

			modal4.style.display = 'none';

			window.onclick = function (event) {
				if (event.target == modal4){
					modal4.classList.remove('fadeIn');
				modal4.classList.add('fadeOut');
				setTimeout(() => {
					modal4.style.display = 'none';
				}, 500);
				};
			}
		}





		mdl5o.addEventListener('click',function(){
			modal5.classList.remove('fadeOut');
			modal5.classList.add('fadeIn');
			modal5.style.display = 'flex';
		})

		mdl5c.addEventListener('click',function(){
			modal5.classList.remove('fadeIn');
			modal5.classList.add('fadeOut');
			setTimeout(() => {
				modal5.style.display = 'none';
			}, 500);
		})
		for (let i = 0; i < closeButton5.length; i++) {

			const elements = closeButton5[i];

			elements.onclick = (e) => {
				modal5.classList.remove('fadeIn');
				modal5.classList.add('fadeOut');
				setTimeout(() => {
					modal5.style.display = 'none';
				}, 500);
			};

			modal5.style.display = 'none';

			window.onclick = function (event) {
				if (event.target == modal5){
					modal5.classList.remove('fadeIn');
				modal5.classList.add('fadeOut');
				setTimeout(() => {
					modal5.style.display = 'none';
				}, 500);
				};
			}
		}




       mdl6c.addEventListener('click',function(){
			modal6.classList.remove('fadeIn');
			modal6.classList.add('fadeOut');
			setTimeout(() => {
				modal6.style.display = 'none';
			}, 500);
	   })

		
		mdl6o.addEventListener('click',function(){
			modal6.classList.remove('fadeOut');
			modal6.classList.add('fadeIn');
			modal6.style.display = 'flex';
		})
        for (let i = 0; i < closeButton6.length; i++) {

			const elements = closeButton6[i];

			elements.onclick = (e) => {
				modal6.classList.remove('fadeIn');
				modal6.classList.add('fadeOut');
				setTimeout(() => {
					modal6.style.display = 'none';
				}, 500);
			};

			modal6.style.display = 'none';

			window.onclick = function (event) {
				if (event.target == modal6){
					modal6.classList.remove('fadeIn');
				modal6.classList.add('fadeOut');
				setTimeout(() => {
					modal6.style.display = 'none';
				}, 500);
				};
			}
		}



	
	}, [])

   











    return(

        <>
        
            <div className="pt-10 mmin-height">
                <h2 className="uppercase teal-clr text-center fs-25 mb-3 ">portfolio component</h2>
                <div className="mb-3 flex justify-center items-center ">
                    <div className="line me-3 bg-teal-clr "></div>
                    <i className="fa-solid fa-star teal-clr"></i>
                    <div className="line ms-3 bg-teal-clr "></div>
                </div>

                <div className="container mx-auto ">
                <div className=" flex gap-11 justify-center  ">
                    <div aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-small-modal" data-hs-overlay="#hs-small-modal">
					<div  id="modall1" className=" relative rounded-md w-80">
                        <img id="image"  className=" w-full cursor-pointer rounded-md" src="src/Components/images/poert1.png" alt="" />
                        <div className=" layer__ rounded-md  absolute start-0 bottom-0 right-0 top-0  flex justify-center items-center ">
                            <i className="text-white fa-solid fa-plus fa-6x"></i>
                        </div>
                    </div>
	                </div>

	                <div id="hs-small-modal" className="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
		            <div
			className="border border-teal-500 modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
			<div className="modal-content py-4 text-left px-6">
				
				<div className="flex justify-between items-center pb-3">
					<div id="modallc1" className="modal-close cursor-pointer z-50">
						<svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
							<path
								d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
							</path>
						</svg>
					</div>
				</div>
				
				<div className="my-5">
                    <img src="src/Components/images/poert1.png" alt="poert1-image" />
				</div>

			</div>
		            </div>
	                </div>



                    <div aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-medium-modal" data-hs-overlay="#hs-medium-modal">
					<div id="modall2" className=" relative rounded-md w-80">
                        <img id="image"  className=" w-full cursor-pointer rounded-md" src="src/Components/images/port2.png" alt="" />
                        <div className=" layer__ rounded-md  absolute start-0 bottom-0 right-0 top-0  flex justify-center items-center ">
                            <i className="text-white fa-solid fa-plus fa-6x"></i>
                        </div>
                    </div>
	                </div>

	                <div id="hs-medium-modal" className="main-modal2 fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
		            <div
			        className="border border-teal-500 modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
			        <div className="modal-content py-4 text-left px-6">
				
				<div className="flex justify-between items-center pb-3">
					<div id="modallc2"  className="modal-close2 cursor-pointer z-50">
						<svg  className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
							<path
								d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
							</path>
						</svg>
					</div>
				</div>
				
				<div className="my-5">
                    <img src="src/Components/images/port2.png" alt="poert2-image" />
				</div>

			</div>
		</div>
	                </div>


                    <div aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-medium-modal2" data-hs-overlay="#hs-medium-modal2">
					<div id="modall3"  className=" relative rounded-md w-80">
                        <img id="image"  className=" w-full cursor-pointer rounded-md" src="src/Components/images/port3.png" alt="" />
                        <div className=" layer__ rounded-md  absolute start-0 bottom-0 right-0 top-0  flex justify-center items-center ">
                            <i className="text-white fa-solid fa-plus fa-6x"></i>
                        </div>
                    </div>
	                </div>

	                <div id="hs-medium-modal2" className="main-modal3 fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
		            <div
			        className="border border-teal-500 modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
			        <div className="modal-content py-4 text-left px-6">
				
				<div className="flex justify-between items-center pb-3">
					<div id="modallc3" className="modal-close3 cursor-pointer z-50">
						<svg  className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
							<path
								d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
							</path>
						</svg>
					</div>
				</div>
				
				<div className="my-5">
                    <img src="src/Components/images/port3.png" alt="port3-image" />
				</div>

			</div>
		</div>
	                </div>

                    </div>

                    <div className=" flex gap-11 justify-center mt-12 mb-5">

                    <div aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-small-modal3" data-hs-overlay="#hs-small-modal3">
					<div id="modall4"  className=" relative rounded-md w-80">
                        <img id="image"  className=" w-full cursor-pointer rounded-md" src="src/Components/images/poert1.png" alt="" />
                        <div className=" layer__ rounded-md  absolute start-0 bottom-0 right-0 top-0  flex justify-center items-center ">
                            <i className="text-white fa-solid fa-plus fa-6x"></i>
                        </div>
                    </div>
	                </div>

	                <div id="hs-small-modal3" className="main-modal4 fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
		            <div
			className="border border-teal-500 modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
			<div className="modal-content py-4 text-left px-6">
				
				<div className="flex justify-between items-center pb-3">
					<div id="modallc4" className="modal-close4 cursor-pointer z-50">
						<svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
							<path
								d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
							</path>
						</svg>
					</div>
				</div>
				
				<div className="my-5">
                    <img src="src/Components/images/poert1.png" alt="poert1-image" />
				</div>

			</div>
		            </div>
	                </div>


                    <div aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-small-modal4" data-hs-overlay="#hs-small-modal4">
					<div id="modall5"  className=" relative rounded-md w-80">
                        <img id="image"  className=" w-full cursor-pointer rounded-md" src="src/Components/images/port2.png" alt="" />
                        <div className=" layer__ rounded-md  absolute start-0 bottom-0 right-0 top-0  flex justify-center items-center ">
                            <i className="text-white fa-solid fa-plus fa-6x"></i>
                        </div>
                    </div>
	                </div>

	                <div id="hs-small-modal4" className="main-modal5 fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
		            <div
			className="border border-teal-500 modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
			<div className="modal-content py-4 text-left px-6">
				
				<div className="flex justify-between items-center pb-3">
					<div id="modallc5" className="modal-close5 cursor-pointer z-50">
						<svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
							<path
								d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
							</path>
						</svg>
					</div>
				</div>
				
				<div className="my-5">
                    <img src="src/Components/images/port2.png" alt="poert1-image" />
				</div>

			</div>
		            </div>
	                </div>


                    <div aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-small-modal5" data-hs-overlay="#hs-small-modal5">
					<div id="modall6"  className=" relative rounded-md w-80">
                        <img id="image"  className=" w-full cursor-pointer rounded-md" src="src/Components/images/port3.png" alt="" />
                        <div className=" layer__ rounded-md  absolute start-0 bottom-0 right-0 top-0  flex justify-center items-center ">
                            <i className="text-white fa-solid fa-plus fa-6x"></i>
                        </div>
                    </div>
	                </div>

	                <div id="hs-small-modal5" className="main-modal6 fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
		            <div
			className="border border-teal-500 modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
			<div className="modal-content py-4 text-left px-6">
				
				<div className="flex justify-between items-center pb-3">
					<div id="modallc6" className="modal-close6 cursor-pointer z-50">
						<svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
							<path
								d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
							</path>
						</svg>
					</div>
				</div>
				
				<div className="my-5">
                    <img src="src/Components/images/port3.png" alt="poert1-image" />
				</div>

			</div>
		            </div>
	                </div>

                    </div>
                </div>

            </div>
        
        </>
    )
}