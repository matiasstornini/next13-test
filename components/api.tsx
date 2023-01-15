export const fetchApi = async () => {
  console.log("fetchApi is being called");

  const url = "https://redcardfut2.netlify.app/Datos.json";
  const response = await fetch(url);
  const responseJSON = await response.json();
  return responseJSON;
};
