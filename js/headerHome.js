const base_address = window.location;
alert(base_address);
class HomeHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
<!-- Navbar Start -->
<nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
  <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
      <h1 class="m-0" style="font-family:Georgia, 'Times New Roman', Times, serif, oblique;">Detector plants</h1>
  </a>
  <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span class="navbar-toggler-icon"></span>
  </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0">
            <a href="#" class="nav-item nav-link" active>Home</a>
            <a href="IdentifyPage/index.html" class="nav-item nav-link" target="_balnk">Identify</a>
            <a href="ExplorePage/index.html" class="nav-item nav-link" target="_balnk">Explore</a>
            <a href="AboutPage/index.html" class="nav-item nav-link" target="_balnk">About us</a>
            <a href="HelpPage/index.html" class="nav-item nav-link" target="_balnk">Help</a>
            <a href="FAQ/index.html" class="nav-item nav-link">FAQ</a>
        </div>
    </div> 
    </nav>
  `
    }
}

customElements.define("home-header", HomeHeader);

class OtherHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
<!-- Navbar Start -->
<nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
  <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
      <h1 class="m-0" style="font-family:Georgia, 'Times New Roman', Times, serif, oblique;">Detector plants</h1>
  </a>
  <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span class="navbar-toggler-icon"></span>
  </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0">
            <a href="/index.html" class="nav-item nav-link" target="_balnk">Home</a>
            <a href="../IdentifyPage/index.html" class="nav-item nav-link" active>Identify</a>
            <a href="../ExplorPage/index.html" class="nav-item nav-link" target="_balnk">Explore</a>
            <a href="../AboutPage/index.html" class="nav-item nav-link" target="_balnk">About us</a>
            <a href="../HelpPage/index.html" class="nav-item nav-link"  target="_balnk">Help</a>
            <a href="../FAQPage/index.html" class="nav-item nav-link">FAQ</a>
        </div>
    </div> 
    </nav>
  `
    }
}

customElements.define("other-header", OtherHeader);