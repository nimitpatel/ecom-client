export const getCookie = (name) => {
    let nameEQ = name + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        // eslint-disable-next-line eqeqeq
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        // eslint-disable-next-line eqeqeq
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}