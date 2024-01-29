// apiRoutes.js
const baseUrl = "https://apiportfolio-10b0ce5793e3.herokuapp.com/api";

const apiRoutes = {
  actus: `${baseUrl}/actus`,
  singleActu: (id) => `${baseUrl}/actus/${id}`,
  formTest: `${baseUrl}/formtest`,
  projects: `${baseUrl}/projects`,
  singleProject: (id) => `${baseUrl}/projects/${id}`,
  formContact: `${baseUrl}/formcontact`,
  login: `${baseUrl}/auth/login`,
};

export default apiRoutes;
