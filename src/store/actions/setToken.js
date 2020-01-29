export default function(tokenQuery) {
  return async (dispatch, getState) => {
    const tokenSetings = await tokenQuery.split("&").reduce(function(p, e) {
      var a = e.split("=");
      p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
      return p;
    }, {});

    const expireIn = Number(tokenSetings["expires_in"]);
    const expireInMinutes = expireIn / 60;

    const date = new Date();
    const expiresTill = date.setMinutes(date.getMinutes() + expireInMinutes);

    tokenSetings["expires_till"] = expiresTill;

    // тут были проблемы с операциями с timestamp, не уверен что сделал красиво

    localStorage.setItem("vk-auth", JSON.stringify(tokenSetings));
    return true;
  };
}
