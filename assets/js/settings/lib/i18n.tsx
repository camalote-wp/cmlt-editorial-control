// assets/js/settings/lib/i18n.tsx
import { __ } from '@wordpress/i18n';

// Export commonly used strings as constants for consistency
export const STRINGS = {
    // Page titles
    EDITORIAL_CONTROL: __('Editorial Control', 'camalote-wp-direct-media-placement'),
    COVER: __('Portada', 'camalote-wp-direct-media-placement'),
    
    // Article types
    ARTICLE_PRIMARY: __('Artículo Primario', 'camalote-wp-direct-media-placement'),
    ARTICLE_SECONDARY: __('Artículo Secundario', 'camalote-wp-direct-media-placement'),
    ARTICLE_TERTIARY: __('Artículo Terciario', 'camalote-wp-direct-media-placement'),
    COVER_ARTICLES: __('Artículos de tapa', 'camalote-wp-direct-media-placement'),
    
    // Audiovisual section
    AUDIOVISUAL_SECTION: __('Sección Audiovisual', 'camalote-wp-direct-media-placement'),
    VIDEO_TITLE: __('Título del video', 'camalote-wp-direct-media-placement'),
    VIDEO_URL: __('URL del video', 'camalote-wp-direct-media-placement'),
    VIDEO_DESCRIPTION: __('Descripción del video', 'camalote-wp-direct-media-placement'),
    NO_AUDIOVISUAL_CONTENT: __('No hay contenido audiovisual.', 'camalote-wp-direct-media-placement'),
    EMBED_URL_NOT_COMPATIBLE: __('URL no compatible para incrustar', 'camalote-wp-direct-media-placement'),
    
    // Form controls
    SEARCH_CONTENT: __('Buscar contenido...', 'camalote-wp-direct-media-placement'),
    LOADING: __('Cargando...', 'camalote-wp-direct-media-placement'),
    SAVING: __('Guardando...', 'camalote-wp-direct-media-placement'),
    SAVE_CHANGES: __('Guardar Cambios', 'camalote-wp-direct-media-placement'),
    UNSAVED_CHANGES: __('Cambios sin guardar', 'camalote-wp-direct-media-placement'),
    SETTINGS_SAVED_SUCCESS: __('¡Configuración guardada exitosamente!', 'camalote-wp-direct-media-placement'),
    
    // Validation messages
    VALID_URL_REQUIRED: __('Por favor ingrese una URL válida con protocolo (http:// o https://).', 'camalote-wp-direct-media-placement'),
    
    // Misc
    NO_TITLE: __('(Sin título)', 'camalote-wp-direct-media-placement'),
    REMOVE: __('Eliminar', 'camalote-wp-direct-media-placement'),
};