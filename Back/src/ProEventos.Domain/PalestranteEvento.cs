namespace ProEventos.Domain
{
    public class PalestranteEvento
    {
        public int PalestranteId { get; set; }
        public Palestrantes Palestrante { get; set; }
        public int EventoId { get; set; } 
        public Evento Evento { get; set; }
    }
}