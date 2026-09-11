const registros = [
  { full_name: "  Lucía Pérez  ", email: "LUCIA@USAL.ES", role: "admin", active: "true" },
  { full_name: "Marcos Soto", email: "marcos@gmail.com", role: "user", active: "false" },
  { full_name: " Sofia Vega ", email: "sofia@usal.es", role: "editor", active: "true" },
  { full_name: "Raúl Blanco", email: "raul@hotmail.com", role: "user", active: "true" }
];

function limpiarUsuarios(registros){
    const activos = registros.filter(r => r.active === "true" && r.email.toLowerCase().endsWith("@usal.es"));
    return activos.map((r, index) => ({
        id: index + 1,
        full_name: r.full_name.trim(),
        email: r.email.toLowerCase()
    }))
}
    
console.log(limpiarUsuarios(registros));