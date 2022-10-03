using Microsoft.EntityFrameworkCore;
using TodoApp.Data;
using TodoApp.Data.Seeding;

namespace TodoApp.Server.Infrastructure.Extensions;

internal static class ApplicationBuilderExtensions
{   
    public static IApplicationBuilder UseSwaggerUI(this IApplicationBuilder app)
    {
        return app
            .UseSwagger()
            .UseSwaggerUI(options =>
            {
                options.SwaggerEndpoint("/swagger/v1/swagger.json", "TodoApp V1");
                options.RoutePrefix = string.Empty;
            });
    }
    
    public static IApplicationBuilder SeedDatabase(this IApplicationBuilder app)
    {
        using var serviceScope = app.ApplicationServices.CreateScope();
        var dbContext = serviceScope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
        dbContext.Database.Migrate();
        new ApplicationDbContextSeeder().SeedAsync(dbContext, serviceScope.ServiceProvider).GetAwaiter().GetResult();

        return app;
    }
}
