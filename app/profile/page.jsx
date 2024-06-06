export default function profile()
{

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
            <div>This is the main profile page that user comes to once they are first logged in.</div>
        </main>


    )
}