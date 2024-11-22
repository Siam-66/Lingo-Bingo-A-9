

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-200 text-base-content p-10 flex justify-around items-center">
  <div>
      <aside>
    <img className="w-40" src="/public/assets/Lingo Bingo.png" alt="" />
    <p>
    Lingo Bingo Ltd.
      <br />
      A Vocabulary Learning Application
    </p>
  </aside>
  </div>

  
      <nav>
    <h6 className="footer-title text-xl">Services</h6>
    <a className="link link-hover">Profile</a>
    <a className="link link-hover">Start Learning</a>
    <a className="link link-hover">Tutorials</a>
  
  </nav>
  <nav>
    <h6 className="footer-title text-xl">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
  
  </nav>
  <nav>
    <h6 className="footer-title text-xl">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">User Agreement</a>
  </nav>


</footer>
        </div>
    );
};

export default Footer;