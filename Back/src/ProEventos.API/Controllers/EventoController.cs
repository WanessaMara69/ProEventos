using System.Reflection.Metadata.Ecma335;
using Microsoft.AspNetCore.Mvc;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers;

[ApiController]
[Route("[controller]")]
public class EventoController : ControllerBase
{
    public IEnumerable<Evento> _evento = new Evento[]{
                new Evento(){
                EventoId = 1,
                Tema = "Angular e Dotnet",
                Local = "Fortal",
                Lote = "1º Lote",
                QntPessoas = 250,
                DataEvento = DateTime.Now.AddDays(2).ToString(),
                ImagemURL = "foto.png"
                },
                new Evento(){
                EventoId = 2,
                Tema = "Angular e Dotnet e Novidades",
                Local = "Acular",
                Lote = "1º Lote",
                QntPessoas = 50,
                DataEvento = DateTime.Now.AddDays(3).ToString(),
                ImagemURL = "foto.png"
                }
         };

    public EventoController() { }

    [HttpGet]
    public IEnumerable<Evento> Get()
    {
        return _evento;
    }

    [HttpGet("id")]
    public IEnumerable<Evento> GetById(int id)
    {
        return _evento.Where(evento => evento.EventoId == id);
    }

    [HttpPost]
    public string Post()
    {
        return "Exemplo Post";
    }

    [HttpPut("id")]
    public string Put(int id)
    {
        return "$Exemplo put = {id}";
    }

    [HttpDelete("id")]
    public string Delete(int id)
    {
        return "$Exemplo delete = {id}";
    }


}
