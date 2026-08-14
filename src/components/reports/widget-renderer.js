export const renderWidget = (el, cfg) => {
  el.querySelector("#w1").innerHTML = cfg.widget1Markup;
  el.querySelector("#w2").innerHTML = cfg.widget2Markup;
  el.querySelector("#w3").innerHTML = cfg.widget3Markup;
  el.querySelector("#w4").innerHTML = cfg.widget4Markup;
  el.querySelector("#w5").innerHTML = cfg.widget5Markup;
  el.querySelector("#w6").innerHTML = cfg.widget6Markup;
  cfg.hook1 = new Function("ctx", cfg.hookSrc1);
  cfg.hook2 = new Function("ctx", cfg.hookSrc2);
  cfg.hook3 = new Function("ctx", cfg.hookSrc3);
  cfg.hook4 = new Function("ctx", cfg.hookSrc4);
};
