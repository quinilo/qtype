// place files you want to import through the `#lib` alias in this folder.
export class statsCookie {

    /**
     * @param {number} score
     */
    static saveHighscore(score) {
        if (parseInt(this.getCookie("highscore")) < score || this.getCookie("highscore") === "") {
            document.cookie = "highscore=" + score
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