import React from 'react';
import Container from '../Container/Container';
import logo2 from "../../../public/logo_2.png";


const Footer = () => {
    return (
        <div className=" bg-[#1E2A3F] pb-16 ">
      <Container>
        <footer className="footer grid grid-cols-2 md:grid-cols-4 p-10 bg-[#1E2A3F] text-white">
          <aside>
           <img className='w-[200px]' src={logo2} alt="" />

            <p>
              Delectus culpa laboriosam debitis saepe. Commodi earum minus ut
              obcaecati veniam deserunt est!
            </p>
          </aside>
          <nav>
            <header className="font-semibold text-2xl text-[#0E9E4D]">
              Useful Links
            </header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="font-semibold text-2xl text-[#0E9E4D]">
              Policies
            </header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="font-semibold text-2xl text-[#0E9E4D]">
              Contact Info
            </header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </Container>
    </div>
    );
};

export default Footer;