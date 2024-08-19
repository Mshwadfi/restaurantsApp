import React from "react";
// import Usercontext from '../utils/Usercontext'; // Commented out import

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            salary: 1000,
        };
    }
    
    render() {
        const { name, role } = this.props.Data;
        const { salary } = this.state; 

        return (
            <div className="about-us">
                <div className="student">
                    {/* <Usercontext.Consumer> */}
                    {/*     {(data) => { */}
                    {/*         console.log(data); */}
                    {/*         return ( */}
                    {/*             <div> */}
                    {/*                 <img src={'muhammad'} alt="Muhammad"></img> */}
                    {/*                 <h2>{name}</h2> */}
                    {/*                 <h3>{role}</h3> */}
                    {/*                 <h3>{salary}</h3> */}
                    {/*                 <button onClick={() => { */}
                    {/*                     this.setState({ */}
                    {/*                         salary: this.state.salary * 2, */}
                    {/*                     }); */}
                    {/*                 }}>Salary X2</button> */}
                    {/*                 <p>Status: {data.loggedIn}</p> */}
                    {/*             </div> */}
                    {/*         ); */}
                    {/*     }} */}
                    {/* </Usercontext.Consumer> */}
                    
                    {/* Code without Usercontext */}
                    <img src={'muhammad'} alt="Muhammad"></img>
                    <h2>{name}</h2>
                    <h3>{role}</h3>
                    <h3>{salary}</h3>
                    <button onClick={() => {
                        this.setState({
                            salary: this.state.salary * 2,
                        });
                    }}>Salary X2</button>
                    {/* <p>Status: {data.loggedIn}</p> */} {/* Commented out */}
                </div>
            </div>
        );
    }
}

export default UserClass;
