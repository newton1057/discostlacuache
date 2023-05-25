// Interfaz abstracta para el disco digital
interface DiscoDigital {
    almacenarDatos(datos: string): void;
    leerDatos(): string;
  }
  
  // Interfaz abstracta para el disco físico
  interface DiscoFisico {
    grabarDatos(datos: string): void;
    reproducirDatos(): string;
  }
  
  // Implementación concreta de DiscoDigital
  class DiscoDigitalImpl implements DiscoDigital {
    private datos: string | null = null;
  
    almacenarDatos(datos: string): void {
      console.log("Almacenando datos en el disco digital");
      this.datos = datos;
    }
  
    leerDatos(): string {
      console.log("Leyendo datos del disco digital");
      return this.datos!;
    }
  }
  
  // Implementación concreta de DiscoFisico
  class DiscoFisicoImpl implements DiscoFisico {
    private datos: string | null = null;
  
    grabarDatos(datos: string): void {
      console.log("Grabando datos en el disco físico");
      this.datos = datos;
    }
  
    reproducirDatos(): string {
      console.log("Reproduciendo datos del disco físico");
      return this.datos!;
    }
  }
  
  // Fábrica abstracta de discos
  interface FabricaDiscos {
    crearDiscoDigital(): DiscoDigital;
    crearDiscoFisico(): DiscoFisico;
  }
  
  // Implementación concreta de la fábrica de discos
  class FabricaDiscosImpl implements FabricaDiscos {
    crearDiscoDigital(): DiscoDigital {
      return new DiscoDigitalImpl();
    }
  
    crearDiscoFisico(): DiscoFisico {
      return new DiscoFisicoImpl();
    }
  }
  
  // Ejemplo de uso
  const fabricaDiscos: FabricaDiscos = new FabricaDiscosImpl();
  
  const discoDigital: DiscoDigital = fabricaDiscos.crearDiscoDigital();
  discoDigital.almacenarDatos("Datos en disco digital");
  console.log(discoDigital.leerDatos());
  
  const discoFisico: DiscoFisico = fabricaDiscos.crearDiscoFisico();
  discoFisico.grabarDatos("Datos en disco físico");
  console.log(discoFisico.reproducirDatos());
  