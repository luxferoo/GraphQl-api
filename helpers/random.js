export default {
    string(loop = 1) {
        let i = 1;
        let random = null;
        while (i <= loop) {
            random += Math.random().toString(36).substring(2);
            i++;
        }
        return random;
    }
}