namespace SURNxApi.DTOs
{
    public class TeamMember
    {
        public int Id { get; set; } = 0;
        public string Name { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string? Email { get; set; } = string.Empty;
        public string? Phone { get; set; } = string.Empty;
        public string? ImageUrl { get; set; } = string.Empty;
        public string? Bio { get; set; } = string.Empty;
        public string? Twitter { get; set; } = string.Empty;
        public string? GitHub { get; set; } = string.Empty;
        public string? LinkedIn { get; set; } = string.Empty;
        public string? Blog { get; set; } = string.Empty;
        public List<string>? Tags { get; set; } = [];
        public bool? Active { get; set; } = true;
        public bool? PreviouslySelected { get; set; } = false;
    }
}