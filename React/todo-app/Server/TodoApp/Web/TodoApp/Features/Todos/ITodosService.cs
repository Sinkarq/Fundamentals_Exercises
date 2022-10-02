using TodoApp.Server.Features.Todos.Models;

namespace TodoApp.Server.Features.Todos;

public interface ITodosService : IService
{
    Task<IEnumerable<T>> GetAllAsync<T>();

    Task<T> GetByIdAsync<T>(int id);

    Task<Todo?> GetByIdModelAsync(int id);

    Task<Todo> CreateAsync(Todo model);

    Task DeleteAsync(Todo model);
}