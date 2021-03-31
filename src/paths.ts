export const baseUrl = "/";

export const discordBotUrl = process.env.REACT_APP_DISCORD_BOT_URL ?? "";
export const discordBotStatusUrl = `${discordBotUrl}/botStatus`

export const projectsPath = `${baseUrl}projects`;
export const discordBotPath = `${projectsPath}/discordBot`;
export const thisSitePath = `${projectsPath}/reactSite`;