namespace TodoApp.Data.Models;

public class Todo : BaseDeletableModel<int>
{
    public string Text { get; set; }

    public bool IsFinished { get; set; }
}