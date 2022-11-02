export const baseUrl = "/";

export const discordBotUrl = process.env.REACT_APP_DISCORD_BOT_URL ?? "https://localhost";
export const ioConnectPath = '/io';

export const projectsPath = `${baseUrl}projects`;
export const discordBotPath = `${projectsPath}/discordBot`;
export const thisSitePath = `${projectsPath}/reactSite`;