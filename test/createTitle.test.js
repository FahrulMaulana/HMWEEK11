const { createTodo } = require('../src/controller/title');

describe('createTodo', () => {
  it('should create a new title', async () => {
    const req = { body: { title: 'wanpis' } }; // Sesuaikan dengan data yang akan Anda kirim
    const json = jest.fn();
    const res = { json, status: jest.fn(() => ({ json })) };

    await createTodo(req, res);

    expect(json).toHaveBeenCalledWith(expect.any(Object));
  });

  it('should handle errors', async () => {
    const req = { body: { title: 'wanpis' } }; // Sesuaikan dengan data yang akan Anda kirim
    const json = jest.fn();
    const status = jest.fn(() => ({ json }));
    const res = { status };

    const error = new Error('Internal Server Error');
    jest.spyOn(console, 'error').mockImplementation(() => {});

    await createTodo(req, res);

    expect(status).toHaveBeenCalledWith(500);
    expect(json).toHaveBeenCalledWith({ error: 'Internal Server Error' });

    console.error.mockRestore();
  });
});
