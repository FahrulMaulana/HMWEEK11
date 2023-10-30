const { getAlltitle } = require('../src/controller/title');

describe('getAlltitle', () => {
  it('should return a list of titles', async () => {
    const req = {};
    const json = jest.fn();
    const res = { json, status: jest.fn(() => ({ json })) };

    await getAlltitle(req, res);

    expect(json).toHaveBeenCalledWith({ data: expect.any(Array) });
  });

  it('should handle errors', async () => {
    const req = {};
    const json = jest.fn();
    const status = jest.fn(() => ({ json }));
    const res = { status };

    const error = new Error('Internal Server Error');
    jest.spyOn(console, 'error').mockImplementation(() => {});

    await getAlltitle(req, res);

    expect(status).toHaveBeenCalledWith(500);
    expect(json).toHaveBeenCalledWith({ error: 'Internal Server Error' });

    console.error.mockRestore();
  });
});
