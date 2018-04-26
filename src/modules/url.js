import url from 'url';

export default {
  // urlからパラメータを取得するする
  getUrlParams() {
    if (window.location.search.substring(1)) {
      const params = url.parse(window.location.href, true).query;
      console.log(url.parse(window.location.href, true));
      // paramsのkeyごとにforeachで取り出して、逐一処理をする
      Object.keys(params).forEach((key,value)=>{
        const k = key;
        const v = value;
      });
    }
  }
};
