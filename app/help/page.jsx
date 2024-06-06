
export default function Help(){

    const mainStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        height: '100vh',
        margin: '0'
    };
    return (

        <main style={mainStyle} >
            <div>This is the help page and is public. It should be accessable alaways. The user does not need to be logged in.</div>
        </main>


    )
}