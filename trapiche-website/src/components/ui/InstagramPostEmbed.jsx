// components/ui/InstagramPostEmbed.jsx
import { useEffect, useRef } from "react";

/**
 * url: la URL pública del post, p.ej. "https://www.instagram.com/p/Cxyz123/"
 */
export default function InstagramPostEmbed({ url }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Insertar el bloque embed de Instagram
    if (!containerRef.current) return;
    containerRef.current.innerHTML = `
      <blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:12px; box-shadow:0 2px 1px -1px rgba(0,0,0,0.2),0 1px 1px 0 rgba(0,0,0,0.14),0 1px 3px 0 rgba(0,0,0,0.12); margin: 1px; max-width:540px; min-width:326px; padding:0; width:calc(100% - 2px);">
        <a href="${url}"></a>
      </blockquote>
    `;

    // Cargar el script oficial (solo una vez)
    const existing = document.querySelector('script[src="//www.instagram.com/embed.js"], script[src="https://platform.instagram.com/en_US/embeds.js"]');
    if (!existing) {
      const s = document.createElement("script");
      s.async = true;
      s.defer = true;
      s.src = "https://platform.instagram.com/en_US/embeds.js";
      document.body.appendChild(s);
      s.onload = () => window.instgrm && window.instgrm.Embeds && window.instgrm.Embeds.process();
    } else {
      // Si ya está, procesar el nuevo embed
      window.instgrm && window.instgrm.Embeds && window.instgrm.Embeds.process();
    }
  }, [url]);

  return <div ref={containerRef} className="flex justify-center w-full" />;
}