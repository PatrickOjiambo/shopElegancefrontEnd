/**
 * 
 * @returns error page
 */
function NotFound() {
    return (<div>
        <img src="../images/not_found.gif" alt="404" className="w-full h-full" />
        <p className="text-center text-2xl font-bold">Page not found</p>
    </div> );
}

export default NotFound;