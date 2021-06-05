import { Guild } from "discord.js"

export default class Config {

  /**
   * The role IDs of the administrators and moderators roles in the discord server
   */
  public permissionsID: { [key: string]: string } = {
    administrator: '829307162692943893',
    manager: '829815246784692234',
    moderator: '829307796625162290',
    player: '835947414799122443',
    everyone: '829303272061009959',
  }

  /**
   * The role IDs of the families roles in the discord server
   */
  public familiesID: { [key: string]: string } = {
    pink: '848661385714204743',
    blue: '848661405535305749',
    yellow: '848661431976853505',
    green: '848661454932279366',
  }

  public textChannelID: { [key: string]: string } = {
    adminShell: '832629971708674069',
    logsPings: '836928865170358352',

    pink: '838026011244888074',
    blue: '838026056555954186',
    yellow: '838026076172976198',
    green: '838026138516979722',
  }

  public mainGuildID: string = '829303272061009959'

  async mainGuild(): Promise<Guild> {
    return await global.client.guilds.fetch(this.mainGuildID)
  }
}
