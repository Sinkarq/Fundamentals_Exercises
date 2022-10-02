using Microsoft.AspNetCore.Mvc;

namespace TodoApp.Server.Features;

[ApiController]
[Route("[controller]")]
public abstract class ApiController : ControllerBase
{
}
