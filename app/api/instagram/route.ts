import { NextResponse } from "next/server";

/**
 * Obtiene las últimas publicaciones de Instagram usando la Graph API de Meta.
 * Requiere cuenta Instagram Business o Creator vinculada a una Página de Facebook.
 *
 * Variables de entorno:
 * - INSTAGRAM_ACCESS_TOKEN: token de acceso de la Página (con permiso instagram_basic).
 * - INSTAGRAM_USER_ID: ID del usuario de Instagram Business (ig_user_id).
 *
 * Cómo obtenerlas:
 * 1. Crear app en developers.facebook.com
 * 2. Añadir producto "Instagram Graph API"
 * 3. Vincular la Página de Facebook a la cuenta de Instagram Business/Creator
 * 4. Obtener Page Access Token y el instagram_business_account.id de la Página
 */
export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  if (!token || !userId) {
    return NextResponse.json({ media: [], message: "Instagram no configurado (falta INSTAGRAM_ACCESS_TOKEN o INSTAGRAM_USER_ID)" });
  }

  try {
    const url = new URL(`https://graph.facebook.com/v21.0/${userId}/media`);
    url.searchParams.set("fields", "id,media_url,permalink,media_type,thumbnail_url");
    url.searchParams.set("access_token", token);
    url.searchParams.set("limit", "3");

    const res = await fetch(url.toString(), { next: { revalidate: 3600 } });
    const data = await res.json();

    if (data.error) {
      return NextResponse.json({ media: [], error: data.error.message });
    }

    const media = (data.data ?? []).map((m: { media_type?: string; thumbnail_url?: string; media_url: string }) => ({
      ...m,
      media_url: m.media_type === "VIDEO" && m.thumbnail_url ? m.thumbnail_url : m.media_url,
    }));

    return NextResponse.json({ media });
  } catch (e) {
    return NextResponse.json({ media: [], error: String(e) });
  }
}
