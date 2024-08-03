import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact-section text-center py-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-left">
            <h5>GET IN TOUCH</h5>
            <p>Email: Stephania@gmail.com</p>
            <p>Phone: 01234567890</p>
          </div>
          <div className="col-md-4">
            <button className="btn btn-outline-light">CONTACT ME</button>
          </div>
          <div className="col-md-4 text-right">
            
            <a href="https://facebook.com" className="text-white mx-2"><i className="fab fa-facebook-f"></i></a>
           <a href="https://twitter.com" className="text-white mx-2"><i className="fab fa-twitter"></i></a>
           <a href="https://linkedin.com" className="text-white mx-2"><i className="fab fa-linkedin-in"></i></a>
           <a href="https://github.com" className="text-white mx-2"><i className="fab fa-github"></i></a>
            <p className="mt-2">Copyright &copy; 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
