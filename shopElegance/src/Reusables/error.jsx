/**
 * 
 * @returns error page
 */
function Error({error, resetErrorBoundary}) {
    return ( <div>
        <img src="../images/error.png" alt="404" className="mx-auto" />
        <p className="text-center text-2xl font-bold">Ooops Something went wrong!!</p>
        <p>{error.message}</p>
        <button onClick={resetErrorBoundary}>Try again</button>
        <p className="text-center text-2xl font-bold">Do something</p>
    </div>);
}

export default Error;