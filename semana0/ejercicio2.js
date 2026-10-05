class ContactStore {
  contactos = [];
  siguienteId = 1;

  obtenerTodos() { 
    return [...this.contactos];
  }
  obtenerPorId(id) { 
    return this.contactos.find(c => c.id === id) || null;
  }
  crear(datos) { 
    const nuevoContacto = { ...datos, id: `c-${this.siguienteId++}`, createdAt: new Date().toISOString() };
    this.contactos.push(nuevoContacto);
    return nuevoContacto;
  }
  eliminar(id) { 
    const indice = this.contactos.findIndex(c => c.id === id);
    if (indice !== -1) {
      this.contactos.splice(indice, 1);
      return true;
    }
    return false;
  }
}

const store = new ContactStore();
const c = store.crear({ nombre: "Elena", email: "elena@usal.es" });
console.log(store.obtenerTodos());
console.log(store.obtenerPorId(c.id));
console.log(store.obtenerPorId("zzz")); // null
console.log(store.eliminar(c.id));      // true
console.log(store.eliminar(c.id));      // false