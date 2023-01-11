import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const Part2 = () => {
    const [state, handleSubmit] = useForm("mlekekdq");
  if (state.succeeded) {
      return <p>Thanks for Message!</p>;
  }

  return (
    <div className="formbold-main-wrapper">
  <div className="formbold-form-wrapper">
    <form onSubmit={handleSubmit} >
      <div className="formbold-mb-5">
        <label htmlFor="name" className="formbold-form-label"> Full Name </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          className="formbold-form-input"
        />
      </div>

      <div className="formbold-mb-5">
        <label htmlFor="email" className="formbold-form-label"> Email Address </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="formbold-form-input"
        />
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>

      <div className="formbold-mb-5">
        <label for="message" className="formbold-form-label"> Message </label>
        <textarea
          rows="6"
          name="message"
          id="message"
          placeholder="Type your message"
          className="formbold-form-input"
        ></textarea>
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>

      <div>
        <button type="submit" disabled={state.submitting} className="formbold-btn">Submit</button>
      </div>
    </form>
  </div>
</div>

  )
}

export default Part2