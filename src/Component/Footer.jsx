import { Link } from "react-router-dom";
import Image1 from "/assets/Lingo Bingo.png";

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-200 text-base-content py-3 px-10  flex justify-around items-center">
  <div >
      <aside>
    <img className="w-40 md:ml-6" src={Image1} alt="" />
    <p className="text-center max-sm:text-xs">
    Lingo Bingo Ltd.
      <br />
      A Vocabulary Learning Application
    </p>

    <nav className=" mt-2 flex gap-4 max-sm:pl-5 md:place-self-center md:justify-self-center">
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
      </svg>
    </a>
  </nav>
  </aside>
  
  </div>

  
      <nav>
    <h6 className="footer-title md:text-xl">Services</h6>
    <Link to="/startLearning" className="link link-hover">Start Learning</Link>
    <Link to="/tutorials" className="link link-hover">Tutorials</Link>
    <Link to="/myProfile" className="link link-hover">Profile</Link>
  
  </nav>
  <nav>
    <h6 className="footer-title md:text-xl">Company</h6>
    <Link to="/aboutus" className="link link-hover">About us</Link>
    <Link to="/" className="link link-hover">Contact</Link>
    <Link to="/" className="link link-hover">Jobs</Link>
  
  </nav>
  <nav>
    <h6 className="footer-title md:text-xl">Legal</h6>
    <Link to="/" className="link link-hover">Terms of use</Link>
    <Link to="/" className="link link-hover">Privacy policy</Link>
    <Link to="/userAgreement" className="link link-hover">User Agreement</Link>
  </nav>

</footer>

<hr />
  <div className="bg-base-200 text-black  p-4">

    <p className="text-center">Copyright © {new Date().getFullYear()} - All right reserved by Lingo Bingo Ltd.</p>
  </div>
        </div>
    );
};

export default Footer;