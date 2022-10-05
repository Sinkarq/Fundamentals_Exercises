using AutoMapper;
using Microsoft.EntityFrameworkCore;
using TodoApp.Data;
using TodoApp.Data.Common.Repositories;

namespace TodoApp.Server.Features.Todos;

public class TodosService : ITodosService
{
    private readonly IDeletableEntityRepository<Todo> todosRepository;

    public TodosService(IDeletableEntityRepository<Todo> todosRepository) => this.todosRepository = todosRepository;

    public async Task<IEnumerable<T>> GetAllAsync<T>() => this.todosRepository.All().To<T>();

    public async Task<T> GetByIdAsync<T>(int id)
    {
        var result = await this.todosRepository.Collection().FindAsync(id);
        return AutoMapperConfig.MapperInstance.Map<T>(result);
    }

    public async Task<Todo?> GetByIdModelAsync(int id) => (await this.todosRepository.All().Where(x => x.Id == id).FirstOrDefaultAsync())!;

    public async Task<Todo> CreateAsync(Todo model)
    {
        await this.todosRepository.AddAsync(model);
        await this.todosRepository.SaveChangesAsync();

        return model;
    }

    public async Task DeleteAsync(Todo model)
    {
        this.todosRepository.Delete(model);

        await this.todosRepository.SaveChangesAsync();
    }

    public async Task UpdateAsync(Todo model)
    {
        this.todosRepository.Update(model);

        await this.todosRepository.SaveChangesAsync();
    }
}