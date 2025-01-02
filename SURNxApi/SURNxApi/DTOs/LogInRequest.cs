namespace SURNxApi.DTOs;

public class LogInRequest(string username, string password)
{
    public string Username { get; set; } = username;
    public string Password { get; set; } = password;
}