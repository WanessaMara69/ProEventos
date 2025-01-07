using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProEventos.API.Data.Migrations
{
    public partial class AdicionarNovaColuna : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Teste",
                table: "Eventos",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Teste",
                table: "Eventos");
        }
    }
}
