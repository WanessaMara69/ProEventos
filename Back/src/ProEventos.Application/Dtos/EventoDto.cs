using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProEventos.Application.Dtos
{
    public class EventoDto
    {
        public int Id { get; set; }
        public string Local { get; set; }
        public string DataEvento { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório."),
        StringLength(50, MinimumLength = 4, ErrorMessage = "{0} deve ter no mínino 4 e no máximo 50 caracteres.")]
        public string Tema { get; set; }

        [Display(Name = "Qtd Pessoas"),
        Range(1, 120000, ErrorMessage = "{0} não pode ser menor que 1 e maior que 120.000.")]
        public int QntPessoas { get; set; }

        [RegularExpression(@".*\.(gif|jpe?g|bmp|png)$", ErrorMessage = "Não é uma imagem válida. (gif, jpg, jpeg, bmp ou png)")]
        public string ImagemURL { get; set; }
        
        [Required(ErrorMessage = "O campo {0} é obrigatório."),
        Phone(ErrorMessage = "O campo {0} está com número inválido.")]
        public string Telefone { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório."),
        Display(Name = "e-mail"),
        EmailAddress(ErrorMessage = "Necessário ser {0} válido.")]
        public string Email { get; set; }
        public IEnumerable<LoteDto> Lotes { get; set; }

        public IEnumerable<RedeSocialDto> RedesSociais { get; set; }

        public IEnumerable<PalestranteDto> PalestrantesEventos { get; set; }
    }
}