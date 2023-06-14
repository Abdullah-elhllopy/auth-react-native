
export default class API {
    static async request(url, method = 'GET', body = null) {
        try {
            const base_url = 'https://login-signup.p.rapidapi.com/public/v1/' + url;
            console.log(base_url)
            let options = {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            if (body) {
                options.body = JSON.stringify({
                    username: 'kminchelle',
                    password: '0lelplR',
                    // expiresInMins: 60, // optional
                })
            }
            console.log('options: ' + options)

            const response = await fetch('https://dummyjson.com/auth/login', options);
            const data = await response.json();
            return data;
        } catch (err) {
            console.log('error: ' + err)
            return err
        }

    }
}