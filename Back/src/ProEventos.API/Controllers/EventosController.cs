using System.Reflection.Metadata.Ecma335;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProEventos.API.Data;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers;

[ApiController]
[Route("[controller]")]
public class EventosController : ControllerBase
{
    private readonly DataContext _context;
    public EventosController(DataContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IEnumerable<Evento> Get()
    {
        return _context.Eventos;
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        var evento = _context.Eventos.FirstOrDefault(evento => evento.EventoId == id);
        if (evento == null)
            return NotFound(new { mensagem = $"Evento com id = {id} não encontrado" });
        return Ok(evento);
    }

    [HttpPost]
    public string Post()
    {
        return "Exemplo Post";
    }

    [HttpPut("{id}")]
    public string Put(int id)
    {
        return "$Exemplo put = {id}";
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var evento = _context.Eventos.FirstOrDefault(evento => evento.EventoId == id);
        if (evento == null)
            return NotFound(new { mensagem = $"Evento com id = {id} não encontrado" });

        _context.Eventos.Remove(evento);
        _context.SaveChanges();

        return Ok(new { mensagem = $"Evento com id = {id} deletado com sucesso" });
    }


}
