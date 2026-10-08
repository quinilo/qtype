export class statsCookie {

    /**
     * @param {string} name
     * @param {number} score
     */
    static saveHighscore(name, score) {
        if (parseInt(this.getCookie(name)) < score || this.getCookie(name) === "") {
            document.cookie = name + "=" + score
        }

    }

    /**
     * @param {string} cname
     */
    static getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

}