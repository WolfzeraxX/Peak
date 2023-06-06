using calc.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Http;

namespace calc.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        [HttpPost]
        [Route("api/math/multiply")]
        public IActionResult MultiplyAndAddPercentage(PayLoad payload)
        {
            string falha = " por favor digite numeros inteiros";
            double result = payload.Valor * payload.Parcelas * 1.05;

            

                return Ok(result);
            


        }
    }
}
       


    



    
