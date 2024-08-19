import UserClass from "./UserClass";
const About = () =>{
    const students = [{
        name: 'Muhammad',
        role: 'FrontEnd Dev.'
    }];
    return(
        <div className="about">
            
            <h1>About Us</h1>
        {students.map(student =>{
           return <UserClass Data={student} />;
        })}

        </div>
    )
}

export default About;