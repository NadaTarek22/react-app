
export function Footer(){

    return(

        <>
    
            <div className=' '>

                 <div className="second-clr">
                <div className=" mx-auto footer">
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div className='text-center p-4'>
                            <h3 className="uppercase paddingH3">Location</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                        <div className='p-4'>
                            <h3 className='paddingH3'>AROUND THE WEB</h3>
                            <div>
                                <i className='fa-brands mx-1 fa-facebook icon'></i>
                                <i className='fa-brands mx-1 fa-twitter icon'></i>
                                <i className='fa-brands mx-1 fa-linkedin-in icon'></i>
                                <i className='fa-solid mx-1 fa-globe icon'></i>

                            </div>
                        </div>
                        <div className='p-4'>
                            <h3 className='paddingH3'>ABOUT FREELANCER</h3>
                            <p >Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>


                    </div>
                </div>
                

                 </div>

                <div className='footerP'>
                <p className=' text-center text-white padding-top'>Copyright © Your Website 2021</p>
                </div>
   
            </div> 
      
        </>
    )
}