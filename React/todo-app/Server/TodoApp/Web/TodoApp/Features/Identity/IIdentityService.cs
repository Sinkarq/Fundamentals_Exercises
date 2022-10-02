namespace TodoApp.Server.Features.Identity;

public interface IIdentityService : ISingletonService
{
    string GenerateJwtToken(string userId,string username, string secret);
}