import Dashboard from "./views/Dashboard.js";
import Menu from "./views/Menu.js";
import Settings from "./views/Settings.js";
import LogIn from "./views/LogIn.js";
import SignUp from "./views/SignUp.js";
import Writing from "./views/Writing.js";
import Writing_detail from "./views/Writing_detail.js";
import NotFound from "./views/NotFound.js";


const navigateTo = url => {
  // history.psuhState를 사용해서 url 변경을 할 수 있도록 해주고, router 함수를 실행시켜 랜더링.
  history.pushState(null, null, url);
  router();
};

// 각 페이지들을 왔다갔다 할 수 있게끔 라우터 구현
// frontend/static/js/index.js
// view는 해당 경로에서 나타내는 html 의미
const router = async () => {
  const routes = [
    { path: "/", view: Dashboard },
    { path: "/menu", view: Menu },
    { path: "/settings", view: Settings },
    { path: "/login", view: LogIn },
    { path: "/singup", view: SignUp },
    { path: "/writing", view: Writing },
    { path: "/writing_detail", view: Writing_detail },

  ];
  
  // Test each route for potential match
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname === route.path
    };
  });

  // find() : 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환. 그런 요소가 없다면 undefined 반환.
  // isMatch가 true일 때 path값과 location.pathname의 값이 같다면 해당 페이지를 보여준다.
  // potentialMatches.isMatch인 값, 즉 true인 값의 view 함수를 실행한 viewing...을 보여줌.
  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

  if(!match){
    match = {
      route: location.pathname,
      isMatch: true
    };
    // 만약 match가 undefined라면 NotFound 페이지를 랜더링하고, undefined가 아닌 경우에는 해당하는 페이지를 랜더링하도록.
    const page = new NotFound();
    document.querySelector("#app").innerHTML = await page.getHtml();
  } else {
    // 해당하는 페이지의 클래스의 새 인스턴스를 만들고 getHtml 매소드를 실행해서 HTMl 파일에 추가하는 작업.
    const view = new match.route.view();
    document.querySelector("#app").innerHTML = await view.getHtml();
  }
};

// 이 코드를 적지 않으면 뒤로가기 버튼이나 앞으로가기 버튼을 누를때는 콘솔에 출력이 되지 않는다. 
// -> body에만 클릭 이벤트를 주었기 때문이며 popstate 이벤트를 사용해서 해결 가능
// popstate 이벤트가 발생할 때(뒤로가기, 앞으로 가기 등) router 함수를 실행시켜서 해당하는 페이지가 랜더링 될 수 있도록 해준다.
window.addEventListener("popstate", router);

// page가 처음 로드 되었을 때, 각각의 페이지들을 클릭할 때 router함수를 실행시켜 해당되는 페이지에 대한 정보를 띄워줌.
// HTML이 모두 로드됐을 때 첫 페이지를 보여주기 위해서 DOMContentLoaded 사용
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", e => {
    // data-link라는 속성(a 태그)이 있는 곳에서만 동작하도록
    // event.target : 이벤트가 발생한 대상 객체를 가리킨다.
    if(e.target.matches("[data-link]")){
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});