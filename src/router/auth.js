export function isAuthenticated() {
    const token = localStorage.getItem('token');
    return !!token; // return true if token exists, false otherwise
}