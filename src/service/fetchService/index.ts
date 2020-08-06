/**
 * @author: zxs
 * @date: 2020/7/14
 */

const fetchService = {

  post: async (url: string) => {
    let myHeaders = new Headers();
    // myHeaders.append('Content-type', 'application/json');
    const formData = new FormData();
    formData.append('a', '1');
    formData.append('b', '2');
    const init = {
      method: 'get',
      headers: myHeaders,
      // body: formData
    };
    const response = await fetch(url, init);
    const json = await response.json();
    console.log('response', json)
  }
};

export default fetchService
