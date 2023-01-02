
const HomeBanner = () => {

    const style = {
        banner: {
            padding: '100px 10px',
            textAlign: 'left',
            color: 'white',
            backgroundColor: 'black',
        }
    }

    return (

        <div style={style.banner} id="top">
            <div className="col-sm-10 offset-sm-1 col-lg-5 offset-lg-3">
                <h1>I'm Jack Cochran</h1>
                <h2><span className="secondary-blue">Welcome to my portfolio!</span> I'm a full stack web and AI developer, software engineer, and business analyst.</h2>
            </div>
        </div>
    )
}

export default HomeBanner