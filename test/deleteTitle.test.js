const { deleteTodo } = require('../src/controller/title');
const { todo } = require('../models'); 


describe('deleteTodo', () => {
  it('should soft delete the specified title', async () => {
    const req = { params: { id: 61 } }; 
    const json = jest.fn();
    const res = { json, status: jest.fn(() => ({ json })) };
  
    await deleteTodo(req, res);

  });

  
  it('should handle not found error', async () => {
    const req = { params: { id: 999 } }; 
    const json = jest.fn();
    const status = jest.fn(() => ({ json }));
    const res = { status };
  
    await deleteTodo(req, res);
  
    expect(status).toHaveBeenCalledWith(404);
    expect(json).toHaveBeenCalledWith({ error: 'Todo not found' });
  });
  
  it('should handle errors', async () => {
    const req = { params: { id: 60 } }; 
    const json = jest.fn();
    const status = jest.fn(() => ({ json }));
    const res = { status };
  
    const error = new Error('Internal Server Error');
    jest.spyOn(console, 'error').mockImplementation(() => {});
  
    await deleteTodo(req, res);
  
    expect(status).toHaveBeenCalledWith(500);
    expect(json).toHaveBeenCalledWith({ error: 'Internal Server Error' });
  
    console.error.mockRestore();
  });
})