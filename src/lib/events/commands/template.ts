import { Message } from "discord.js";

export default

  {
    name: 'Template',
    desc: "Retourne le template de la commande passée en argument.",
    aliases: ['t'],
    permissions: ['everyone'],
    template: "!template COMMAND_NAME",

    exec: (message: Message, ...args: any[]) => {
      const commandName = args[0]
      if (!global.commands[commandName]) throw new Error("La commande que vous avez passée en argument n\'existe pas, vous pouvez retrouver plus d'informations avec !help .")
      message.reply(global.commands[commandName].template)
    }
  }