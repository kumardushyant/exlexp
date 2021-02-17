module.exports = {
    async headers() {
        return ([
            {
                source: '/api/sheet',
                headers: [
                    {
                        key: 'content-type',
                        value: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                    }
                ]
            }
        ])
    }
}