using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace YourNamespace.Controllers
{
    [ApiController]
    [Route("api/names")]
    public class NamesController : ControllerBase
    {
        private readonly List<KeyValuePair<int, string>> lista = new List<KeyValuePair<int, string>>
        {
            new KeyValuePair<int, string>(1, "João"),
            new KeyValuePair<int, string>(2, "Maria"),
            new KeyValuePair<int, string>(3, "Ana")
        };

        [HttpGet("{id}")]
        public IActionResult GetName(int id)
        {
            var pair = lista.Find(item => item.Key == id);
            if (pair.Equals(default(KeyValuePair<int, string>)))
            {
                return NotFound();
            }
            return Ok(new { name = pair.Value });
        }
    }
}
