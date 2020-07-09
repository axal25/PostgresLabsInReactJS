class Fetcher {
    static async getAllData(path, filesArray) {
        return Promise.all(
            filesArray.map(
                file => fetch(`${path}${file}`)
                    .then(response => response.text())
            )
        );
    }
}

export default Fetcher;