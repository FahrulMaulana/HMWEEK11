const { detailTodo } = require('../src/controller/title');

describe('detailTodo', () => {
  it('should return the specified title', async () => {
    const req = { params: { id: 8 } }; // Ganti dengan ID yang valid
    const json = jest.fn();
    const res = { json, status: jest.fn(() => ({ json })) };

    await detailTodo(req, res);

    expect(json).toHaveBeenCalledWith(expect.any(Object));
  });

  it('should handle not found error', async () => {
    const req = { params: { id: 999 } }; // Ganti dengan ID yang tidak ada
    const json = jest.fn();
    const status = jest.fn(() => ({ json }));
    const res = { status };

    await detailTodo(req, res);

    expect(status).toHaveBeenCalledWith(404);
    expect(json).toHaveBeenCalledWith({ error: 'Todo not found' });
  });

  it('should handle errors', async () => {
    const req = { params: { id: 54 } }; // Ganti dengan ID yang valid
    const json = jest.fn();
    const status = jest.fn(() => ({ json }));
    const res = { status };

    const error = new Error('Internal Server Error');
    jest.spyOn(console, 'error').mockImplementation(() => {});

    await detailTodo(req, res);

    expect(status).toHaveBeenCalledWith(500);
    expect(json).toHaveBeenCalledWith({ error: 'Internal Server Error' });

    console.error.mockRestore();
  });
});
