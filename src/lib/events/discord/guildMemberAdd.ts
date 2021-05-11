import { GuildMember, TextChannel } from "discord.js";

export default async function guildMemberAdd(member: GuildMember) {
  /* Add the player to the right family */
  const request = new global.assets.ServerRequest({ name: 'getPlayerInfo', params: { playerID: member.id, path: 'family.name' }, maxDelay: 10000 })

  const familyName = await request.sendRequest() as string
  if (!familyName) return

  /* Add the current family role */
  await member.roles.add(global.assets.config.familiesID[familyName])

  /* Add the player role */
  await member.roles.add(global.assets.config.permissionsID['player'])

  /* Send the welcoming message to the right channel */
  const mainGuild = await global.assets.config.mainGuild()
  const familyChannel = mainGuild.channels.cache.get(global.assets.config.textChannelID[familyName]) as TextChannel
  familyChannel.send(`Bienvenue à ${member.user} qui vient de rejoindre la famille !`)
}
