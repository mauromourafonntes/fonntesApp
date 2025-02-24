class RolasApi {
    constructor() {
        this._apiUrl = '/api/rolas'
    };

    async getRolas() {
        try {
            const response = await fetch(this._apiUrl);

            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            };

            const json = await response.json();

            return json.data;
        } catch(error) {
            console.log(error.message);
        };
    };

    async createRola(data) {
        const request = new Request(this._apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                rola: data.rola,
                tag: data.tag,
                username: data.username,
            }),
        });

        try {
            const response = await fetch(request);

            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            };

            const json = await response.json();

            return json.data;
        } catch(error) {
            console.log(error.message);
        };
    };

    async updateRola(id, data) {
        const username = localStorage.getItem('username') ? localStorage.getItem('username') : '';

        const request = new Request(`${this._apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                rola: data.rola,
                tag: data.tag,
                username: username,
            }),
        });

        try {
            const response = await fetch(request);

            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            };

            const json = await response.json();

            return json.data;
        } catch(error) {
            console.log(error.message);
        };
    };

    async deleteRola(id) {
        const username = localStorage.getItem('username') ? localStorage.getItem('username') : '';

        const request = new Request(`${this._apiUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: username }),
        });

        try {
            const response = await fetch(request);

            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            };

            const json = await response.json();

            return json.data;
        } catch(error) {
            console.log(error.message);
        };
    };
};

export default new RolasApi();