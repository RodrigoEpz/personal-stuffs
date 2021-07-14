import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Llamar una API y retornar datos callback', (done) => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    getData('https://google.com')
      .then((response) => {
        return expect(response.data).toEqual('12345');
        done();
      });
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });

  test('Llamar una API y retornar datos return promise', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    return getData('https://google.com')
      .then((response) => {
        return expect(response.data).toEqual('12345');
      });
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });

});