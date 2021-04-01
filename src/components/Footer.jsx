import React from "react";


function Footer(){
    return (
        <footer class="footer">
          <div class="content has-text-centered">
            <p>
                Copyright © {new Date().getFullYear()}
            </p>
          </div>
        </footer>
    )
}

export default Footer;

{/* <footer class="footer">
  <div class="content has-text-centered">
    <p>
        Copyright © {new Date().getFullYear()}
    </p>
  </div>
</footer> */}

{/* <footer>
        <p>
        Copyright © {new Date().getFullYear()}
        </p>
    </footer> */}