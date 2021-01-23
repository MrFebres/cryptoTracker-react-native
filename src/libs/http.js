export class Http {
  static instance = new Http();

  get = async (url) => {
    try {
      let req = await fetch(url);
      let json = await req.json();

      return json;
    } catch (err) {
      console.info('[GET-ERR] ', err);
      throw new Error();
    }
  };

  post = async (url, body) => {
    try {
      let req = await fetch(url, {
        method: 'POST',
        body,
      });
      let json = await req.json();

      return json;
    } catch (err) {
      console.info('[POST-ERR] ', err);
      throw new Error();
    }
  };

  put = async (url, body) => {
    try {
      let req = await fetch(url, {
        method: 'PUT',
        body,
      });
      let json = await req.json();

      return json;
    } catch (err) {
      console.info('[PUT-ERR] ', err);
      throw new Error();
    }
  };

  delete = async (url, body) => {
    try {
      let req = await fetch(url, {
        method: 'DELETE',
        body,
      });
      let json = await req.json();

      return json;
    } catch (err) {
      console.info('[DELETE-ERR] ', err);
      throw new Error();
    }
  };
}
