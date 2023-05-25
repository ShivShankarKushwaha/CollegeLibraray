import React from 'react'

function Footer() {
    return (
        <footer className='w-full bg-slate-900 text-white flex px-20 flex-col '>
            <div className='flex items-start justify-center my-5'>
                <a href='https://iiitu.ac.in' target='_blank' className='text-4xl font-bold mx-10 underline hover:cursor-pointer'>Indian Institute of Information Technology,Una</a>
                <div className='flex flex-row justify-center items-center w-1/4'>
                    <a className='flex justify-center bg-blue-900 p-5  w-16 h-16 rounded-full text-3xl m-auto' href="https://www.facebook.com/iiituna" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a className='flex justify-center bg-blue-900 p-5  w-16 h-16  rounded-full text-3xl m-auto' href="https://mail.google.com/mail/?view=cm&fs=1&to=21331@iiitu.ac.in" target="_blank"><i className="fa-solid fa-envelope"></i></a>
                    <a className= 'flex justify-center bg-blue-900 p-5  w-16 h-16  rounded-full text-3xl m-auto' href="https://instagram.com/iiituna_" target="_blank"><i className="fab fa-instagram"></i></a>
                    <a className='flex justify-center bg-blue-900 p-5  w-16 h-16  rounded-full text-3xl m-auto' href="https://linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div className='flex w-full justify-around p-10'>
                <div className='w-2/3 flex justify-between items-start text-xl'>
                    <div className='flex flex-col  items-center'>
                        <h1 className='text-3xl'>About</h1>
                        <a className='my-5 underline' href="">Home</a>
                        <a className='my-5 underline' href="">About Us</a>
                        <a className='my-5 underline' href="">Facilities</a>
                    </div>
                    <div className='flex flex-col  items-center'>
                        <h1 className='text-3xl'>Quick Links</h1>
                        <a className='my-5 underline' href="">Placement</a>
                        <a className='my-5 underline' href="">Campus Life</a>
                        <a className='my-5 underline' href="">How to Reach</a>
                    </div>
                    <div className='flex flex-col  items-center'>
                        <h1 className='text-3xl'>Student's Corner</h1>
                        <a className='my-5 underline' href="">Hostel Leave</a>
                        <a className='my-5 underline' href="">Academic Leave</a>
                        <a className='my-5 underline' href="https://mail.google.com/mail/?view=cm&fs=1&to=director@iiitu.ac.in" target='_blank'>Contact Us</a>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54441.051751541585!2d76.11447244863284!3d31.481130100000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391adb198180014f%3A0xbf76347093a3aa9a!2sIndian%20Institute%20of%20Information%20Technology%20(IIIT)%20Una!5e0!3m2!1sen!2sin!4v1684997385982!5m2!1sen!2sin" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </footer>
    )
}

export default Footer;