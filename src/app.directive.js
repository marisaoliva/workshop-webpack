import template from ".//app.view.html"

let app = () => {
  return {
    template: template,
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

export default app;
