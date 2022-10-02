namespace TodoApp.Server.Features.Todos.Models;

public class CreateTodoInputModel
{
    public string Text { get; set; }

    public bool IsFinished { get; set; }
}