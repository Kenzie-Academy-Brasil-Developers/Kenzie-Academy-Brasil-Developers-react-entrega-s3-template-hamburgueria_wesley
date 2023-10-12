const host = "https://hamburgueria-kenzie-json-serve.herokuapp.com";

export const getAllItems = async () => {
  const readItems = await fetch(`${host}/products`, {
    method: "GET",
  })
    .then(async (resp) => {
      const item = resp.json();
      if (resp.ok) {
        return item;
      }
    })
    .catch((err) => {
      console.log(err, "verifique a aplicação");
    });

  return readItems;
};
