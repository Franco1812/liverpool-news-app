# Liverpool FC News 📰🔴

Una aplicación móvil moderna desarrollada con **Ionic** y **Angular** que te mantiene actualizado con las últimas noticias del Liverpool Football Club directamente desde Anfield.

## 🎯 Características Principales

- **📰 Noticias en tiempo real** del Liverpool FC desde fuentes confiables
- **🔍 Búsqueda específica** de noticias del club
- **⭐ Sistema de favoritos** para guardar artículos importantes
- **🔄 Pull-to-refresh** para actualizar contenido
- **📱 Diseño responsive** optimizado para móviles
- **⚡ Infinite scroll** para cargar más noticias automáticamente
- **🌙 Soporte para tema claro/oscuro**

## 🚀 Tecnologías Utilizadas

- **Frontend**: Ionic 5 + Angular 12
- **API**: NewsAPI.org
- **Plataforma**: Capacitor 3
- **Idioma**: TypeScript
- **Estilos**: SCSS
- **Estado**: RxJS Observables

## 📱 Fuentes de Noticias

La aplicación obtiene noticias desde fuentes deportivas confiables:
- BBC Sport
- ESPN
- Goal
- Sky Sports
- The Guardian UK
- Independent
- Telegraph
- Mirror
- Daily Mail

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js 16.x o superior
- npm o yarn
- Ionic CLI

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone [URL_DEL_REPOSITORIO]
cd liverpool-fc-news
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar API Key**
   - Obtener una API key gratuita en [NewsAPI.org](https://newsapi.org/)
   - Agregar la key en `src/environments/environment.ts`

4. **Ejecutar en modo desarrollo**
```bash
npm start
```

5. **Construir para producción**
```bash
npm run build
```

## 🔑 Configuración de la API

Para que la aplicación funcione correctamente, necesitas configurar tu API key de NewsAPI.org:

```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiKey: 'TU_API_KEY_AQUI',
  apiUrl: 'https://newsapi.org/v2',
};
```

## 📱 Estructura de la Aplicación

```
src/
├── app/
│   ├── components/          # Componentes reutilizables
│   ├── pages/              # Páginas principales
│   │   ├── tab1/          # Página "Para ti" (Noticias del Liverpool)
│   │   └── tab3/          # Página "Favoritos"
│   ├── services/           # Servicios de la aplicación
│   │   └── news.service.ts # Servicio de noticias
│   └── interfaces/         # Interfaces TypeScript
├── assets/                 # Recursos estáticos
│   └── icon/              # Iconos y favicon
└── environments/           # Configuración de entornos
```

## 🎨 Funcionalidades Destacadas

### Página "Para ti"
- Noticias principales del Liverpool FC
- Pull-to-refresh para actualizar contenido
- Infinite scroll para cargar más noticias
- Filtrado automático de contenido relevante

### Página "Favoritos"
- Guardar artículos importantes
- Acceso rápido a contenido favorito
- Gestión de artículos guardados

### Búsqueda Inteligente
- Búsqueda específica por palabras clave
- Filtrado por relevancia
- Resultados optimizados para Liverpool FC

## 🔧 Comandos Disponibles

```bash
# Desarrollo
npm start              # Servidor de desarrollo
npm run build          # Construir para producción
npm run test           # Ejecutar tests
npm run lint           # Verificar código

# Capacitor
npx cap add android    # Agregar plataforma Android
npx cap add ios        # Agregar plataforma iOS
npx cap sync           # Sincronizar cambios
```

## 📊 Características Técnicas

- **Arquitectura**: Component-based con Angular
- **Estado**: Manejo reactivo con RxJS
- **HTTP**: Cliente HTTP optimizado
- **Responsive**: Diseño adaptativo para todos los dispositivos
- **Performance**: Lazy loading y optimizaciones de rendimiento

## 🌍 Soporte Multiidioma

La aplicación está configurada para mostrar noticias en inglés, optimizando la búsqueda de contenido internacional del Liverpool FC.

## 📈 Roadmap

- [ ] Notificaciones push para noticias importantes
- [ ] Modo offline con cache local
- [ ] Compartir artículos en redes sociales
- [ ] Estadísticas del equipo en tiempo real
- [ ] Calendario de partidos
- [ ] Galería de fotos oficiales

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- **NewsAPI.org** por proporcionar acceso a noticias deportivas
- **Ionic Framework** por la plataforma de desarrollo móvil
- **Liverpool FC** por la inspiración y contenido
- **Comunidad Angular** por el framework robusto

## 📞 Contacto

- **Proyecto**: [Liverpool FC News](https://github.com/tu-usuario/liverpool-fc-news)
- **Issues**: [GitHub Issues](https://github.com/tu-usuario/liverpool-fc-news/issues)

---

**⚽ You'll Never Walk Alone! 🔴**

*Desarrollado con ❤️ para la comunidad del Liverpool FC*
