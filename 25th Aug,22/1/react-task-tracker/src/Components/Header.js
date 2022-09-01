const Header= (props) => {     //props=properties which means whatever written there will be linked with this page 
    return(
        <header>
            <h1>Hello,{props.title}</h1> //or Hello,{title}
        </header>
    );

};
Header.defaultProps={
    title:"Task Tracker",
};
Header.propTypes={
    title:propTypes.dtring.isRequired,
}
export default Header;