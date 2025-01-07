using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProEventos.API.Data.Migrations
{
    public partial class RemoverNovaColuna : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Teste",
                table: "Eventos");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }

    }
}
