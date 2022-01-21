import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {

    const [state, handleSubmit] = useForm('xoqyrzvw');
        if (state.succeeded) {
            return <p>Thanks for joining!</p>;
    }

    window.onbeforeunload = () => {
        for(const form of document.getElementsByTagName('form')) {
            form.reset();
        }
    }

    return (
        <section className='contact-form-section'>
            
            <section className='contact-form-intro'>
                <section className='contact-form-title'>
                    <h1><small>&#9733; &#9733; &#9733;</small> Contacts <small>&#9733; &#9733; &#9733;</small></h1>

                    <p>Thank You for visiting my website!</p>
                    <p>If you wish to contact DJ BBQ, please, fill out the form bellow.</p>
                </section>
                <p><strong>Booking:</strong> Planning an event, festival, private party, or the like? 
                Drop us a message below and me or someone from the team 
                will get back to you shortly.</p>

                <p><strong>Wholesale:</strong> Interested in stocking any of 
                our products? Please, fill out the form below, adding a 
                message about yourself/your business and what 
                products you are interested in, 
                and we'll get back to you.</p>
            </section>
        
        <form className='contact-form' onSubmit={handleSubmit}>

            <section>
                <label htmlFor='name'>Your Name: </label>
                    <input
                        id='name'
                        type='text' 
                        name='name'
                        placeholder='Name and Surname'
                        required
                        size='40'
                    />
                    <ValidationError 
                        prefix='name' 
                        field='name'
                        errors={state.errors}
                    />
            </section>

            <section>
                <label htmlFor='email'>Email Address: </label>
                    <input 
                        id='email'
                        type='email' 
                        name='email'
                        placeholder='my-email@gmail.com'
                        required
                        size='40'
                    />
                    
                    <ValidationError 
                        prefix='email' 
                        field='email'
                        errors={state.errors}
                        size='40'
                    />
            </section>

            <section>
                <label htmlFor='number'>Contact Number: </label>
                    <input
                        id='number'
                        type='tel' 
                        name='number'
                        placeholder='+37120011238'
                        size='40'
                    />
                    <ValidationError 
                        prefix='number' 
                        field='number'
                        errors={state.errors}
                    />
            </section>

            <section>
                <label htmlFor='subject'>Topic: </label>
                    <input 
                        id='subject'
                        type='text' 
                        name='subject'
                        placeholder='Wholesale/Booking DJ BBQ/etc...'
                        size='40'
                        required
                    />  
                    <ValidationError 
                        prefix='subject' 
                        field='subject'
                        errors={state.errors}
                        />
            </section>

            <section>
                <label htmlFor='message'>Message: </label>
                    <textarea
                        id='message'
                        name='message'
                        rows='5' 
                        cols='40'
                        placeholder='Your message...'
                        required
                    />
                    <ValidationError 
                        prefix='message' 
                        field='message'
                        errors={state.errors}
                    />
            </section>

            {
            /*<section>
                <label className='checkbox-label' htmlFor='policy-agreement'>Click to agree to our policies.</label>
                    <input 
                        id='privacy-policy-agreement' 
                        type='checkbox' 
                        name='policy-agreement'
                        value='User has agreed to DJ-BBQ.com policies'
                        required>
                    </input>
            </section>
            */}

            <section>
                <button className='contact-form-submit-button' type='submit' disabled={state.submitting}>
                    Submit Message
                </button>
            </section>

            <input className='trap-input' type='text' name='_gotcha' />

        </form>
        </section>
    );
}

export default ContactForm;