import React, { Component } from 'react'
import "./Navbar.module.css"

export class Navbar extends Component {

    state = {
        scroll: 0,
        sticky: false,
        distanceFromTop: 0
    };
    
    navbar = React.createRef();

    componentDidMount() {
        const distanceFromTop = this.navbar.current.getBoundingClientRect().top;
        // console.log(distanceFromTop);
        this.setState({ scroll: window.scrollY, distanceFromTop });
        window.addEventListener("scroll", e => {
          this.handleScroll(e);
        });
    }
    
    handleScroll = e => {
        const { sticky, distanceFromTop } = this.state;
        // console.log(window.scrollY);
        // only change state if it isn't already sticky and if it's changed
        if (window.scrollY > 650 && sticky === false) {
          this.setState({ sticky: true });
        } else if (window.scrollY < 640 && sticky) {
          this.setState({ sticky: false });
        }
    };

    render() {
        const { sticky } = this.state;
        const styles = sticky
          ? {
              position: "fixed",
              top: "0px"
            }
        : {};

        return (
            <div>
                <nav ref={this.navbar} style={{ ...styles }}>
                    <div>
                        <span>VN</span>
                    </div>
                    {/* <div>About</div>
                    <div>Projects</div>
                    <div>Blogs</div>
                    <div>Contact</div> */}
                </nav>
            </div>
        )
    }
}

export default Navbar
