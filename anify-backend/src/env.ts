// All environment variables.
export const env = {
    PORT: Number(process.env.PORT ?? 3000),
    DATABASE_URL: process.env.DATABASE_URL ?? "",
    NINEANIME_RESOLVER: process.env.NINEANIME_RESOLVER,
    NINEANIME_KEY: process.env.NINEANIME_KEY,
    REDIS_URL: process.env.REDIS_URL,
    REDIS_CACHE_TIME: Number(process.env.REDIS_CACHE_TIME ?? 60 * 60 * 24 * 7),
    CENSYS_ID: process.env.CENSYS_ID,
    CENSYS_SECRET: process.env.CENSYS_SECRET,
    SIMKL_CLIENT_ID: process.env.SIMKL_CLIENT_ID,
    USE_MIXDROP: process.env.USE_MIXDROP === "true" || false,
    MIXDROP_EMAIL: process.env.MIXDROP_EMAIL,
    MIXDROP_KEY: process.env.MIXDROP_KEY,
    SECRET_KEY: process.env.SECRET_KEY ?? "anifydobesupercoolbrodudeawesome",// MUST BE 32 CHARACTERS
    TEXT_TO_INJECT: process.env.TEXT_TO_INJECT ?? "Provided by anify.tv",
    DISTANCE_FROM_INJECTED_TEXT_SECONDS: Number(process.env.DISTANCE_FROM_INJECTED_TEXT ?? 300),
    DURATION_FOR_INJECTED_TEXT_SECONDS: Number(process.env.DISTANCE_FROM_INJECTED_TEXT ?? 5),
    SUBTITLES_CACHE_TIME: Number(process.env.SUBTITLES_CACHE_TIME ?? 60 * 60 * 12),
    API_URL: process.env.API_URL ?? "https://api.anify.tv",
    USE_SUBTITLE_SPOOFING: process.env.USE_SUBTITLE_SPOOFING === "true" || false,
    USE_INLINE_SUBTITLE_SPOOFING: process.env.USE_INLINE_SUBTITLE_SPOOFING === "true" || false,
};
