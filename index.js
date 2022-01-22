const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com', {
    params: {
      apikey: 'b30415c7',
      s: 'avengers'
    }
  });

  console.log(response.data);
};

fetchData();
