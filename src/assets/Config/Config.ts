import { Guild } from "discord.js"

export default class Config {

  /**
   * The role IDs of the administrators and moderators roles in the discord server
   */
  public permissionsID: { [key: string]: string } = {
    administrator: '829307162692943893',
    manager: '829815246784692234',
    moderator: '829307796625162290',
    everyone: '829303272061009959',
  }

  /**
   * The role IDs of the families roles in the discord server
   */
  public familiesID: { [key: string]: string } = {
    pink: '829308762774962218',
    blue: '829309368477417492',
    yellow: '829309405396467722',
    green: '829309423440625684',
  }

  public mainGuildID: string = '829303272061009959'

  get mainGuild(): Guild {
    return global.client.guilds.cache.find(guild => guild.id === this.mainGuildID)
  }
}