import Dashboard from "./views/Dashboard.js";
import Menu from "./views/Menu.js";
import Settings from "./views/Settings.js";
import LogIn from "./views/LogIn.js";
import SignUp from "./views/SignUp.js";


const navigateTo = url => {
  history.pushState(null, null, url);
  router();
};


const router = async () => {
  const routes = [
    { path: "/", view: Dashboard },
    { path: "/menu", view: Menu },
    { path: "/settings", view: Settings },
    { path: "/login", view: LogIn },
    { path: "/singup", view: SignUp },

  ];
  
  // Test each route for potential match
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname === route.path
    };
  });

  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

  if(!match){
    match = {
      route: routes[0],
      isMatch: true
    };
  }

  const view = new match.route.view();

  document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", e => {
    if(e.target.matches("[data-link]")){
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});