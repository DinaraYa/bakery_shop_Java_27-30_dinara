
const ErrorPage = () => {
    const entries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    const navType = entries.length > 0 ? entries[0].type : null
    if (window.location.pathname === '/error' && navType === 'reload') {
        window.location.replace('/')
    }
    return (
        <div>
            Error 404! Page not found!
    </div>
);
};

export default ErrorPage;