import React from 'react'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import LoadingButton from "@mui/lab/LoadingButton";
import CircularProgress from '@mui/material/CircularProgress';
import SendIcon from "@mui/icons-material/Send";
import emailjs from 'emailjs-com';

export default function ContactMe() {

    const [loading, setLoading] = React.useState(false);

    function sendEmail(e) {
        setLoading(true)
        e.preventDefault();
        emailjs.sendForm('service_cjlki4h', 'template_d6yhvya', e.target, 'IWAlqGEuPzRGx1I9-').then(res=> {
            setTimeout(setLoading(false), 1500)
        }).catch(err=> alert('Error sending email.'))
    }

  return (
    <div className='h-screen space-y-10 flex relative flex-col text-center md:text-left md:flex-row px-10 justify-evenly max-auto items-center'>
        <h1 className='absolute select-none top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h1>

        <div className='flex flex-col short:space-y-2 space-y-10'>
            <h1 className='short:text-2xl text-4xl short:mt-5 font-semibold text-center'>
                I have got just what you need.{" "}
                <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
            </h1>

            <div className='space-y-10'>
                <div className='flex items-center short:mb-5 space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>+961 81 726 783</p>
                </div>
                <div className='flex items-center short:hidden space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>ahmad_nasser04@outlook.com</p>
                </div>
            </div>

            <form onSubmit={sendEmail} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input name='name' placeholder='Name *' className='contactInput w-[40vw] max-w-lg' type="text" required/>
                    <input name='email' placeholder='Email *' className='contactInput w-[40vw] max-w-lg' type="email" required/>
                </div>
                <input name='subject' placeholder='Subject *' className='contactInput' type='text' required/>
                <textarea name='message' placeholder='Message *' className='contactInput' required/>
                <LoadingButton
                    type='submit'
                    endIcon={<SendIcon />}
                    loading={loading}
                    loadingIndicator={
                        <CircularProgress size={32} sx={{color: '#F7AB0A'}} />
                    }
                    loadingPosition="center"
                    variant="contained"
                    color='error'
                    sx={{
                        backgroundColor: '#F7AB0A',
                        padding: '20px 40px',
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: '18px',
                        lineHeight: '28px',
                        borderRadius: '6px',
                        '&:hover': {
                            backgroundColor: 'rgb(247 171 10 / 0.4)',
                        },
                    }}
                >
                    Send
                </LoadingButton>
            </form>
        </div>
    </div>
  )
}
