using Microsoft.AspNetCore.Mvc;
using SURNxApi.DTOs;

namespace SURNxApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TeamMemberController : ControllerBase
{
    [HttpGet()]
    [ProducesResponseType(200)]
    [ProducesResponseType(204)]
    public async Task<ActionResult<List<TeamMember>>> GetTeamMembers()
    {
        var teamMembers = new List<TeamMember>
{
    new TeamMember
    {
        Id = 1,
        Name = "Dave Leonard",
        Title = "Architect",
        Email = "wleonard@ntst.com",
        Phone = string.Empty,
        ImageUrl = string.Empty,
        Bio = string.Empty,
        Twitter = string.Empty,
        GitHub = string.Empty,
        LinkedIn = string.Empty,
        Blog = string.Empty,
        Tags = new List<string>(),
        Active = true
    },
    new TeamMember
    {
        Id = 2,
        Name = "Tyler Baytes",
        Title = "Engineer",
        Email = string.Empty,
        Phone = string.Empty,
        ImageUrl = string.Empty,
        Bio = string.Empty,
        Twitter = string.Empty,
        GitHub = string.Empty,
        LinkedIn = string.Empty,
        Blog = string.Empty,
        Tags = new List<string>(),
        Active = true,
        PreviouslySelected = false
    },
    new TeamMember
    {
        Id = 1,
        Name = "Derek Moore",
        Title = "Architect",
        Email = "dmoore@ntst.com",
        Phone = string.Empty,
        ImageUrl = string.Empty,
        Bio = string.Empty,
        Twitter = string.Empty,
        GitHub = string.Empty,
        LinkedIn = string.Empty,
        Blog = string.Empty,
        Tags = new List<string>(),
        Active = true
    },
    new TeamMember
    {
        Id = 1,
        Name = "Brian Hoffman",
        Title = "Engineer",
        Email = "bhoffman@ntst.com",
        Phone = string.Empty,
        ImageUrl = string.Empty,
        Bio = string.Empty,
        Twitter = string.Empty,
        GitHub = string.Empty,
        LinkedIn = string.Empty,
        Blog = string.Empty,
        Tags = new List<string>(),
        Active = true
    },
    new TeamMember
    {
        Id = 1,
        Name = "Neng-Ye Jian",
        Title = "Engineer",
        Email = "njian@ntst.com",
        Phone = string.Empty,
        ImageUrl = string.Empty,
        Bio = string.Empty,
        Twitter = string.Empty,
        GitHub = string.Empty,
        LinkedIn = string.Empty,
        Blog = string.Empty,
        Tags = new List<string>(),
        Active = true
    },
    new TeamMember
    {
        Id = 1,
        Name = "Mohan",
        Title = "Engineer",
        Email = "mohan@ntst.com",
        Phone = string.Empty,
        ImageUrl = string.Empty,
        Bio = string.Empty,
        Twitter = string.Empty,
        GitHub = string.Empty,
        LinkedIn = string.Empty,
        Blog = string.Empty,
        Tags = new List<string>(),
        Active = true
    },
    new TeamMember
    {
        Id = 1,
        Name = "Sridhar",
        Title = "Engineer",
        Email = "Sridhar@ntst.com",
        Phone = string.Empty,
        ImageUrl = string.Empty,
        Bio = string.Empty,
        Twitter = string.Empty,
        GitHub = string.Empty,
        LinkedIn = string.Empty,
        Blog = string.Empty,
        Tags = new List<string>(),
        Active = true
    },
    new TeamMember
    {
        Id = 1,
        Name = "Rich Poccia",
        Title = "QA",
        Email = "rpoccia@ntst.com",
        Phone = string.Empty,
        ImageUrl = string.Empty,
        Bio = string.Empty,
        Twitter = string.Empty,
        GitHub = string.Empty,
        LinkedIn = string.Empty,
        Blog = string.Empty,
        Tags = new List<string>(),
        Active = true
    }
};
        return Ok(teamMembers);
    }
}