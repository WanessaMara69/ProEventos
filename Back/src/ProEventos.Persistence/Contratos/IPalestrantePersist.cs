using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence.Contratos
{
    public interface IPalestrantePersist
    {
        Task<Palestrantes[]> GetAllPalestrantesByNomeAsync(string nome, bool includeEventos);
        Task<Palestrantes[]> GetAllPalestrantesAsync(bool includeEventos);
        Task<Palestrantes> GetPalestranteByIdAsync(int palestranteId, bool includeEventos);

    }
}