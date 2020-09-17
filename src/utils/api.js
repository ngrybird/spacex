import { BASE_URL } from "./constants";

export const getLaunchInfo = async options => {
  const queryParams = getUrlParams(options);
  const apiUrl = BASE_URL + queryParams;
  const jsonResponse = await fetch(apiUrl, {
    method: "GET"
  }).then(response => response.json());

  return jsonResponse;
};

export const getUrlParams = filterOption => {
  let query = "";
  if (filterOption.year !== "") {
    query += `&launch_year=${filterOption.year}`;
  }
  if (filterOption.successLand !== "") {
    query += `&land_success=${filterOption.successLand}`;
  }
  if (filterOption.successLaunch !== "") {
    query += `&launch_success=${filterOption.successLaunch}`;
  }
  return query;
};
