export const fetchApi = async () => {
  console.log("fetchApi is being called");

  const url = "https://docs.google.com/spreadsheets/d/";
  const ssid = "1uD_UtAaYl8lh7w_8VWRCnVi-Ugat-O_2V-puezenbdw";
  const q1 = "/gviz/tq?";
  const q2 = "tqx=out:json";
  const q3 = "sheet=Admin";
  return `${url}${ssid}${q1}&${q2}&${q3}`;
};
