import React, { Component } from 'react'
import { Link } from 'gatsby'
import { urlEncode } from '../helpers/string'

import SEO from "../components/seo"
import Event from '../components/Event'

import '../styles/layout.scss'
import '../styles/responsive.scss'
import './contact.scss'

import backImage from '../images/back-arrow.svg';

class ContactPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      success: false,
      form: {
        name: '',
        email: '',
        company: '',
        message: ''
      }
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ isLoading: true })
    const response = await fetch('https://xtuegxcusb.execute-api.us-east-1.amazonaws.com/dev/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: urlEncode(this.state.form)
    })

    if (response.status === 200) {
      this.setState({ isLoading: false, success: true})
    } else {
      this.setState({ isLoading: false, success: false })
    }

  }

  goBack = () => {
    window.history.back();
  }

  onFieldChange = (e) => {
    this.setState({ form: {...this.state.form, [e.target.name]: e.target.value }})
  }

  render() {
    const isReferred = window.history.state && window.history.state.referred
    return (
      <div className="container ContactPage">
        <SEO 
          title="Contact" 
          keywords={[`contact`, `email`, `personal website`, `blog`, `technology`]}
          description="Anthony's contact page" />
        {this.state.success && <Event title="Thank you"><p>Your message has been received. Click <Link to="/">here</Link> to go back to the main page.</p></Event>}
        {this.state.success === false && <Event title="Uh oh..."><p>Your message could not be sent. Click <Link to="/">here</Link> to go back to the main page.</p></Event>}
        {this.state.success === null && <div className="contact-card">
          {isReferred && <button className="back__button" onClick={this.goBack}><img src={backImage} alt="Back arrow" /></button>}
          <h1>Get In Touch</h1>
          <p className="contact__pg">Hey! Something wrong with the website? Missing/Broken notes? Just want to get in touch? Leave a message here, I'll try to get back to you as soon as possible.</p>
          <form className="contact__input" onSubmit={this.handleSubmit}>
            <label className="contact__label">Name</label>
            <input onChange={this.onFieldChange} className="contact-field" placeholder="Name" type="text" name="name" required />
            <label className="contact__label">Email</label>
            <input onChange={this.onFieldChange} className="contact-field" placeholder="Email Address" type="email" name="email" />
            <label className="contact__label">Company</label>
            <input onChange={this.onFieldChange} className="contact-field" placeholder="Company Name (optional)" type="text" name="company" />
            <label className="contact__label">Message</label>
            <textarea onChange={this.onFieldChange} className="contact-field" placeholder="Write something" type="text" name="message" required></textarea>
            <button disabled={this.state.isLoading} type="submit" className="contact__buton">Send</button>
          </form>
        </div>}
      </div>
    );
  }
}

export default ContactPage