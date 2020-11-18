const Api = (props) => {
    // Fetch services on moounting



    // fetch('https://api.github.com/users/hacktivist123/repos')
    //     .then(response => response.json())
    //     .then(data => console.log(data));


    const handleSubmit = async (e) => {
    e.preventDefault();
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
        }

        try {
        const response = await fetch('http://3.138.78.254:88/account/register', requestOptions);
        const maindata = await response.json();
        console.log(maindata)
        localStorage.setItem('userdata', JSON.stringify(maindata));
        if(maindata.email) {
            setOtppage(true);
            setUserid(maindata.id)
        }
    } catch (err) {
        console.log(err);
    }
      

  };





  return { handleChange, handleSubmit };
};

export default Api;
