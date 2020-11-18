const Api = () => {
    const getBuilding = async(service, group) => {
        try {
            const request = await fetch(`https://canaan-towers-api.herokuapp.com/${service}/${group}`);
            const response = await request.json();
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };
    return { getBuilding };
};

export default Api
